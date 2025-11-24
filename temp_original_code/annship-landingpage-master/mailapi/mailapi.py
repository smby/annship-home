#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by g7tianyi on Jan 08, 2021

import os
import json
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from flask import Flask, request, jsonify


server_addr = os.getenv('ANNSHIP_EMAIL_SERVER_ADDR')
if server_addr is None or server_addr.strip() == '':
    server_addr = 'outlook.office365.com'

username = os.getenv('ANNSHIP_EMAIL_USERNAME')
if username is None or username.strip() == '':
    username = 'operation@annship.com'

password = os.getenv('ANNSHIP_EMAIL_PASSWORD')
if password is None or password.strip() == '':
    password = '#VCXt)-U2..es)J'


def sendmail(subject, content, receivers):
    server = smtplib.SMTP(server_addr, 587)
    server.starttls()
    server.login(username, password)

    message = MIMEText('''<head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <style type="text/css" media="screen">
        pre {
            padding: 10px 15px;
            overflow: auto;
            font-size: 13px;
            line-height: 1.45;
            border-radius: 3px;
            background-color: #f6f8fa;
        }
      </style>
    </head>
    <body>
    %s
    </body>''' % content, 'html', 'utf-8')

    message['Subject'] = Header(subject, 'utf-8').encode()
    message['To'] = ';'.join(receivers)
    message['From'] = 'annship <%s>' % 'operation@annship.com'
    message.preamble = 'Your mail reader does not support the report format.'
    server.sendmail(username, receivers, message.as_string())
    server.quit()


app = Flask(__name__)
app.debug = False

ok_response = {
    'status': 'ok'
}

failure_response = {
    'status': 'failed'
}


def load_failure_response(message):
    return {
        'status': 'failed',
        'message': message
    }


@app.route('/api/email', methods=['post'])
def send_mail():
    if not request.data:
        return load_failure_response('request body can not be empty')

    content = request.data.decode('utf-8')
    json_dict = json.loads(content)
    if 'subject' not in json_dict:
        return load_failure_response('email subject can not be empty')

    if 'content' not in json_dict:
        return load_failure_response('email content can not be empty')

    if 'receivers' not in json_dict:
        return load_failure_response('email receivers can not be empty')

    sendmail(json_dict['subject'], json_dict['content'], json_dict['receivers'].split(';'))

    return jsonify(ok_response)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8025)

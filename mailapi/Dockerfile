FROM annship/annship-base:ubuntu18.04.3
RUN pip3 install flask
COPY mailapi.py /opt/annship/
ENTRYPOINT ["python3","/opt/annship/mailapi.py"]

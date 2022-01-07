FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

# install system dependencies
RUN apt-get update \
&& apt-get -y install gcc postgresql \
&& apt-get clean

WORKDIR /app

COPY ./requirements.txt ./requirements.txt

RUN pip install --upgrade pip

RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

COPY ./app ./

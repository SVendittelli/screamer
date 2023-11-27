FROM ruby:2.7@sha256:2347de892e419c7160fc21dec721d5952736909f8c3fbb7f84cb4a07aaf9ce7d

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

EXPOSE 4000

WORKDIR /srv/jekyll
COPY Gemfile* /srv/jekyll

RUN gem install bundler && bundle install

COPY . /srv/jekyll

CMD bundle exec jekyll serve -H 0.0.0.0 -t

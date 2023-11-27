FROM ruby:3.2@sha256:db6b1e15eabeae7672ba3844471a0f1cb4eb6f6f5438fe5b8e8696a2a4376708

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

EXPOSE 4000

WORKDIR /srv/jekyll
COPY Gemfile* /srv/jekyll

RUN gem install bundler && bundle install

COPY . /srv/jekyll

CMD bundle exec jekyll serve -H 0.0.0.0 -t

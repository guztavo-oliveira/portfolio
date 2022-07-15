import cy from "../assets/icons/cypress.png";
import html from "../assets/icons/html5.png";
import css from "../assets/icons/css3.png";
import python from "../assets/icons/python.png";
import postgresql from "../assets/icons/postgresql.png";
import flask from "../assets/icons/flask.png";
import sqlalchemy from "../assets/icons/sqlalchemy.svg";
import materialui from "../assets/icons/materialui.svg";
import react from "../assets/icons/react.png";
import jest from "../assets/icons/jest.png";
import heroku from "../assets/icons/heroku.png";
import sc from "../assets/icons/styledcomponents.png";
import vercel from "../assets/icons/vercel.png";
import js from "../assets/icons/javascript.png";
import node from "../assets/icons/nodejs.png";
import docker from "../assets/icons/docker.png";
import express from "../assets/icons/express.png";
import django from "../assets/icons/django.png";
import mongo from "../assets/icons/mongo.png";
import git from "../assets/icons/git.png";
import trello from "../assets/icons/trello.png";
import typescript from "../assets/icons/typescript.png";
import notion from "../assets/icons/notion.png";

interface ITechnologies {
  [key: string]: any;
}

export const Technologies = {
  cypress: cy,
  html5: html,
  css3: css,
  javascript: js,
  python: python,
  nodejs: node,
  postgreSQL: postgresql,
  flask: flask,
  sqlAlchemy: sqlalchemy,
  heroku: heroku,
  react: react,
  materialUI: materialui,
  jest: jest,
  styledComponents: sc,
  vercel: vercel,
  docker: docker,
  express: express,
  django: django,
  mongo: mongo,
  git: git,
  trello: trello,
  typescript: typescript,
  notion: notion,
} as ITechnologies;

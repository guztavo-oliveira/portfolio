import cy from "../Assets/icons/cypress.png";
import html from "../Assets/icons/html5.png";
import css from "../Assets/icons/css3.png";
import python from "../Assets/icons/python.png";
import postgresql from "../Assets/icons/postgresql.png";
import flask from "../Assets/icons/flask.png";
import sqlalchemy from "../Assets/icons/sqlalchemy.svg";
import materialui from "../Assets/icons/materialui.svg";
import react from "../Assets/icons/react.png";
import jest from "../Assets/icons/jest.png";
import heroku from "../Assets/icons/heroku.png";
import sc from "../Assets/icons/styledcomponents.png";
import vercel from "../Assets/icons/vercel.png";
import js from "../Assets/icons/javascript.png";
import node from "../Assets/icons/nodejs.png";
import docker from "../Assets/icons/docker.png";
import express from "../Assets/icons/express.png";
import django from "../Assets/icons/django.png";
import mongo from "../Assets/icons/mongo.png";
import git from "../Assets/icons/git.png";
import trello from "../Assets/icons/trello.png";
import typescript from "../Assets/icons/typescript.png";
import notion from "../Assets/icons/notion.png";

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

# Tooth.ly

Monorepo for Tooth.ly, an ERP system for the dentistry department at BAU.

## Installation

Download Postgresql and redis then configure local environments in

```
apps/dentlist/.env.local && apps/unicorn/.env.local
```

Then run these commands

```
$ yarn
$ yarn nx serve dentlist
$ yarn nx serve unicorn
```

## High level view of the architecture

![2d arch](<https://github.com/Tooth-ly/monorepo/blob/main/diagrams/Toothly%20Architecture%20(2D).png>)

![3d arch](https://github.com/Tooth-ly/monorepo/blob/main/diagrams/Toothly%20Architecture.png)

## Handling Authentication

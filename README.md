# msd-2022-spring-cs477-final-project

# Final Project

# Build a backend application to manage class rooms in a university. Each class room has code (required), slots: [number (required: true), status (required: True), used_by (can be requested user's id)]. The class room code is unique. There are two statuses: busy, available. The systems also includes users. Each user has code (required), name (required), password (required), role (required). The followings are features we need to have.



## Create CRUD for class rooms

## Create CRUD for users

## There are two types of users, user or admin. An admin can add/update/delete/view the class rooms. A user can view all class rooms

## An admin cannot reqest a class room, but, a user can request for a class room. For example, the user request is {code: 'V47B', slot: 1, status: 'requested'}, and we have the room {code: 'V47B', slots: [{number: 1, status: 'available'}, {number: 2, status: 'available'}]}, it will change to {code: 'V47B', slots: [{number: 1, status: 'busy', used_by: <user's id>}, {number: 2, status: 'available'}]}. if the room is busy, the server will return 'not available'. When the user completes, it can send the request {code: 'V47B', slot: 1, status: 'completed'}, and the room will be released like {code: 'V47B', slots: [{number: 1, status: 'available', used_by: ''}, {number: 2, status: 'available'}]}. Please provide the error handlers as many as possible.

## Implement to list all class rooms by the slot number and status

## All users need to login before calling other APIs

## The access token should expire within 1 hour

## All data should saved in MongoDB

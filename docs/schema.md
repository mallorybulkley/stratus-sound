# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique, index
password_digest | string    | not null
session_token   | string    | not null, unique, index
location        | string    |
bio             | text      |
image_url       | string    |
header_img_url  | string    |

**Associations**

has_many:
* tracks
* follows (users you follow)
* followers (users who follow you)
* playlists
* followed_playlists
* liked_tracks
* played_tracks (through plays)


## tracks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    |
release_date    | date      | not null
description     | text      |
genre           | string    | not null
user_id         | integer   | not null, foreign key: users, index

**Associations**

belongs_to:
* user

has_many:
* comments
* likes
* playlists
* plays

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
commentable_id  | integer   | not null, polymorphic foreign key: tracks or playlists, index
commentable_type| string    | not null, track or playlist

**Associations**

belongs_to:
* user
* commentable (track or playlist)

## playlists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
user_id         | integer   | not null, foreign key: users, index

**Associations**

belongs_to:
* user

has_many:
* tracks
* follows
* comments

## playlist_tracks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
playlist_id     | integer   | not null, foreign key: playlists, index
track_id        | integer   | not null, foreign key: tracks, index

**Associations**

belongs_to:
* track
* playlist


## plays
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key: users, index
track_id        | integer   | not null, foreign key: tracks, index

**Associations**

belongs_to:
* user
* track

# Bonus?

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key: users, index
likeable_id     | integer   | not null, polymorphic foreign key: tracks or playlists, index
likeable_type   | string    | not null, track or user

**Associations**

belongs_to:
* user
* likeable (track or playlist)

## follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key: users, index
followee_id     | integer   | not null, foreign key: users, index

**Associations**

belongs_to:
* follower (user)
* followee (user)

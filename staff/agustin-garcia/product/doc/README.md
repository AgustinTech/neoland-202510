# MyPet

An for pet owners reigster their pets and their medical information, to have control on their health history.

![brave dog](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDl0OHFwamdxZG9uaXZqdDZvbm5wejAzMG90NGY1cG5nZDNueGVjdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4UkX1kD5cl9M4/giphy.gif)

## Functional

User
- register
- login
- update credentials (username, password)
- update profile (name, email, city, role, liscensing number)

Owner (User)
- add pet
- remove pet
- modify pet
- lists pets
- add comment log for pet
- remove log for pet
- modify log for
- list logs for pet
- filter veterinaries
- assigs veterinary for pet
- message veterinary for pet
- logout button app

Veterinary (User)
- list assigned pets
- add action log for pet
- remove action log for pet
- modify action log
- list logs fo pet

## UI/UX design

[Figma](https://www.figma.com/design/hW8r55sxGmzpsjpJHY8L1G/MyPet?node-id=22-17&t=jqEvl7SFXKwi0ZCq-0)

## Technical Description

### Blocks

- App (React)
- API (Expess)
- DB (Mongo)

### Packages

- api (handlers, logic, data)
- app (components, logic, data)
- com (errors, validate, regex)
- doc (readme, images)

### Data Model

UserData
- id (unique, string)
- name (required, string)
- email (required, unique, string)
- username (required, unique, string)
- pasword (required, hashed, string)
- image (string)
- role (required, string, regular | administrator)

PetData
- id (unique, string)
- owner (UserData.id, string)
- name (required, string)
- birthdate (required, date)
- weight (required, number)
- image (required, string)

### Techs

- HTML / JavaScript / CSS / Tailwind / React / React Router
- Node / Express / Mongo / Mongoose / BCrypt / JWT / curl / Mocha / Chai / Morgan
- Git / Markdown / VSCode / Sublime Merge

## Tracking

[PR](https://github.com/b00tc4mp/neoland-202510/pull/18)
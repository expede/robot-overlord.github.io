module View.Style.Id exposing (Id(..), id)

import Html exposing (Attribute)

import View.Style.Namespace as NS

type Id
  = NavBar
  | GlobalHeader
  | GlobalFooter

id : a -> Attribute b
id = NS.id

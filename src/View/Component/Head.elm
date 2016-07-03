module View.Component.Head exposing (head)

import Html exposing (Html, header, h1, text, img)
import FontAwesome

import View.Style.Id exposing (Id(..), id)

import View.Style.Color as Color
import View.Style.Size as Size

head : Html a
head =
  header [id [GlobalHeader]]
    [ text "Menu "
    , hamburger
    ]

hamburger : Html a
hamburger = FontAwesome.bars Color.base Size.base

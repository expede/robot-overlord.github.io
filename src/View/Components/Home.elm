import Home exposing (homePage)

import Html exposing (Html, section, h1, p, ul, li, text)
import Html.Attribute exposing (href)
import Html.Events exposing (onClick)

import Router.Route exposing (Route(..))
import Signal exposing (Signal(..))

import View.Style exposing (class)
import View.Style.Class exposing (Class(..))

homePage : Html Signal
homePage =
  section []
    [ text "foo" ]

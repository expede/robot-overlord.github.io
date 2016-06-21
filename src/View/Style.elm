module View.Style exposing (css)

import Css exposing (..)
import Css.Namespace exposing (namespace)

import View.Style.Container exposing (containers)

css : Stylesheet
css = stylesheet
        << namespace "overlord"
        <| containers

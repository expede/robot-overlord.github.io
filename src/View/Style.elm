module View.Style exposing (css, salt)

import Css exposing (..)
import Css.Namespace exposing (namespace)


import View.Style.Container exposing (containers)

salt : String
salt = "overlord"

css : Stylesheet
css = stylesheet
        << namespace salt
        <| containers

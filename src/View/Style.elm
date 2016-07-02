module View.Style exposing (css, salt, id, class, classList)

import Css exposing (..)
import Css.Namespace exposing (namespace)

import Html.CssHelpers exposing (withNamespace)

import View.Style.Container exposing (containers)

salt : String
salt = "overlord"

{id, class, classList} = Html.CssHelpers.withNamespace salt

css : Stylesheet
css = stylesheet
        << namespace salt
        <| containers

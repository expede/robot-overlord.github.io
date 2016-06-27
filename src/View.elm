module View exposing (view, currentQuery)

import Html exposing (..) -- (Html, body, section, h1, h2, p, text)
import Html.Attributes exposing (class)

import Action exposing (Action(..))

import Components.IconButton as IconButton
import Components.Button as Button
import Components.Css as Css

-- import DisplayHelpers exposing (displayAsDollars)

import Router exposing (Route(..))
import Model exposing (Model)

bootstrap : Html Action
bootstrap =
  Css.link "https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css"

fontAwesome : Html Action
fontAwesome =
  Css.link "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"

view : Model -> Html Action
view model =
  section [] [ pageView model ]

currentQuery : Model -> Html action
currentQuery model =
  let query = toString model.location.path
    in span [] [text query]

showTop : Model -> Html Action
showTop  model =
  div [] [ h2 [] [text "showTop"]
         , currentQuery model
         ]

showBody : Model -> Html Action
showBody model =
  div [] [ h2 [] [text "showBody"]
         , currentQuery model
         ]

pageView : Model -> Html Action
pageView model =
  case model.route of
    TopRoute      -> showTop  model
    BodyRoute     -> showBody model
    NotFoundRoute -> h2 [] [text "Not Found"]

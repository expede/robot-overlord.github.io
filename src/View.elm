module View exposing (view, currentQuery)

import Html exposing (..) -- (Html, body, section, h1, h2, p, text)
import Html.Attributes exposing (class)

import Msg exposing (Msg(..))

import Components.IconButton as IconButton
import Components.Button as Button
import Components.Css as Css

-- import DisplayHelpers exposing (displayAsDollars)

import Router exposing (Route(..))
import Model exposing (Model)

bootstrap : Html Msg
bootstrap =
  Css.link "https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css"


fontAwesome : Html Msg
fontAwesome =
  Css.link "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"

view : Model -> Html Msg
view model =
  section []
          [ pageView model ]

showTop : Model -> Html Msg
showTop  model = div [] [ h2 [] [text "showTop"]
                        , currentQuery model
                        ]

showBody : Model -> Html Msg
showBody model = div [] [ h2 [] [text "showBody"]
                        , currentQuery model
                        ]

pageView : Model -> Html msg
pageView model =
  case model.route of
    TopRoute      -> div [] [ h2 [] [text "top"] ]
    BodyRoute     -> div [] [ h2 [] [text "body"] ]
    NotFoundRoute -> div [] [ h2 [] [text "Not Found"] ]

currentQuery : Model -> Html msg
currentQuery model =
  let query = toString model.location.path
    in span [] [text query]

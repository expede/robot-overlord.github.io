module View exposing (view, currentQuery)

import Html exposing (..) -- (Html, body, section, h1, h2, p, text)
import Html.Attributes exposing (class)

import Signal exposing (Signal(..))

import Router.Route exposing (Route(..))
import Model exposing (Model)

-- bootstrap : Html Signal
-- bootstrap =
--   Css.link "https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css"

-- fontAwesome : Html Signal
-- fontAwesome =
--   Css.link "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"

view : Model -> Html Signal
view model =
  section [] [ pageView model ]

currentQuery : Model -> Html signal
currentQuery model =
  let query = toString model.location.path
    in span [] [text query]

showTop : Model -> Html Signal
showTop  model =
  div [] [ h2 [] [text "showTop"]
         , currentQuery model
         ]

showBody : Model -> Html Signal
showBody model =
  div [] [ h2 [] [text "showBody"]
         , currentQuery model
         ]

pageView : Model -> Html Signal
pageView model =
  case model.route of
    Home      -> showTop  model
    Code      -> showBody model
    Design    -> showBody model
    About     -> showBody model
    Contact   -> showBody model
    Portfolio -> showBody model
    NotFound  -> h2 [] [text "Not Found"]

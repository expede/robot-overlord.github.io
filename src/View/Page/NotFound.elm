module View.Page.NotFound exposing (notFoundPage)

import Html exposing (Html, section, h1, text)

notFoundPage : Html a
notFoundPage =
  section [] [ h1 [] [ text "page not found" ] ]

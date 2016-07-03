module View.Page.NotFound exposing (notFound)

import Html exposing (Html, section, h1, text)

notFound : Html a
notFound =
  section [] [ h1 [] [ text "page not found" ] ]

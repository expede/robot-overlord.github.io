module View.Asset exposing (logo, logoPath)

import Html exposing (Html, img)
import Html.Attributes exposing (src)

 -- perhaps switch to Html.svg
logo : Html a
logo = img [ src logoPath ] []

logoPath : String
logoPath = "./logo.svg"

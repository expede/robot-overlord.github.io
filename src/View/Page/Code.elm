module View.Page.Code exposing (codePage)

import Html exposing
  ( Html
  , section, header
  , h1, h2, p
  , text
  )

import Signal exposing (Signal(..))
import View.Style.Class exposing (Class(..), class)

codePage : Html Signal
codePage =
  section [ class [ FillPage ] ]
    [ header [ class [ FillViewport ] ]
        [ h1 [] [ text "Code" ] ]
    , section []
        [ h1 [] [ text "" ]
        , p [] [ text "" ]
        ]
    ]

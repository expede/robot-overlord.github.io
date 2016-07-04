module View.Page.Design exposing (designPage)

import Html exposing
  ( Html
  , section, header
  , h1, h2, p, blockquote
  , text, br
  )

import Signal exposing (Signal(..))

import View.Style.Class exposing (Class(..), class)

-- Note to self: add section about design process

-- Also, document your code, already!

designPage : Html Signal
designPage =
  section [ class [ FillPage ] ]
    [ header [ class [ FillViewport ] ]
        [ h1 [] [ text "Design:" ]
        , h2 [] [ text "Usability & Human/Computer Interaction" ]
        ]
    , section []
        [ h1 [] [ text "" ]
        , p [] [ text "" ]
        , blockquote []
            [ p []
                [ text "Design is how it works"
                , br [] []
                , text "~Steve Jobs"
                ]
            ]
        , p [] [ text "" ]
        ]
    ]

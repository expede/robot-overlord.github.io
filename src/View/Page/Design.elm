module View.Page.Design exposing (designPage)

import Html exposing
  ( Html
  , section, header
  , h1, h2, p
  , br
  , text
  )

import View.Style.Class exposing (Class(..), class)

designPage : Html
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

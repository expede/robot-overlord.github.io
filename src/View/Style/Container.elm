module View.Style.Container exposing (containers)

import Css exposing (..)
import Css.Elements exposing (body, li, h1, h2)

import Exts.List exposing (singleton)

import View.Style.Class exposing (Class(..))

containers : List Snippet
containers =
    [ global
    , typography
    , logo
    ]

global : Snippet
global =
    body
    [ margin <| px 0
    , fontFamilies ["Open Sans", "sans-serif"]
    , fontSize <| px 14
    ]

typography : Snippet
typography =
 each [h1, h2]
     [ fontFamilies ["Exo", "sans-serif"]
     , fontWeight bold
     , fontSize <| em 5
     , fontStyle <| italic
     , textTransform uppercase
     , textAlign center
     ]

logo : Snippet
logo =
    (.) Logo
        [ textAlign center
        , marginBottom <| px 0
        , adjacentSiblings [h1 [marginTop <| px 0]]
        ]

trueCenter : Snippet
trueCenter =
    (.) TrueCenter
        [ displayFlex
        -- , justifyContent center -- waiting on elm-css 7.0
        , property "justify-content" "center"
        , alignItems center
        ]

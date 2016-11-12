module View.Style.Container exposing (containers)

import Css exposing (..)
import Css.Elements exposing (body, li, h1, h2)

import Exts.List exposing (singleton)

import View.Style.Class exposing (Class(..))
import View.Style.Id exposing    (Id(..))

containers : List Snippet
containers =
    [ global
    , globalFooter
    , typography
    , logo
    , trueCenter
    ]

global : Snippet
global =
    body
    [ margin zero
    , position relative
    , minHeight <| vh 100
    , fontFamilies ["Open Sans", "sans-serif"]
    , fontSize <| px 14
    ]

typography : Snippet
typography =
    each [h1, h2]
        [ fontFamilies ["Exo", "sans-serif"]
        , fontWeight bold
        , fontSize <| em 5
        , fontStyle italic
        , textTransform uppercase
        , textAlign center
        ]

logo : Snippet
logo =
    (.) Logo
        [ textAlign center
        , margin zero
        , adjacentSiblings
              [ h1
                [marginTop zero]
              ]
        ]

trueCenter : Snippet
trueCenter =
    (.) TrueCenter
        [ minHeight <| vh 100
        , displayFlex
        -- , justifyContent center -- waiting on elm-css 7.1
        , property "justify-content" "center"
        , alignItems center
        ]

globalFooter : Snippet
globalFooter =
    (#) GlobalFooter
        [ position absolute
        , bottom zero
        , width <| vw 100
        , textAlign center
        ]

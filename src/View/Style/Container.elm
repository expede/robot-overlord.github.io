module View.Style.Container exposing (containers)

import Css exposing (..)
import Css.Elements exposing (body, li, h1, h2, a)

import View.Style.Class exposing (Class(..))
import View.Style.Id    exposing (Id(..))

import View.Style.Color exposing (..)

containers : List Snippet
containers =
    [ global
    , globalHeader
    , globalFooter
    , typography
    , logo
    , trueCenter
    ]

global : Snippet
global =
    body
    [ margin zero
    , padding <| em 1
    , position relative
    , minHeight <| vh 100
    , fontFamilies ["Open Sans", "sans-serif"]
    , fontSize <| px 16
    ]

typography : Snippet
typography =
    each [h1, h2]
        [ fontFamilies ["Exo", "sans-serif"]
        , fontWeight bold
        , fontSize <| em 4
        , fontStyle italic
        , textTransform uppercase
        -- , mediaQuery "screen and (max-width: 460px)"
        --     [body [fontSize <| em 3]]
        ]

logo : Snippet
logo =
    (.) Logo
        [ textAlign center
        , margin zero
        , adjacentSiblings
              [ h1
                [ marginTop zero ]
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

globalHeader : Snippet
globalHeader =
    (#) GlobalHeader
        [ textAlign center
        , descendants
              [ a [ fontFamilies [ "Exo", "sans-serif" ]
                  , textDecoration none
                  , fontStyle normal
                  , color base
                  ]
              ]
        ]

globalFooter : Snippet
globalFooter =
    (#) GlobalFooter
        [ position absolute
        , bottom zero
        , width <| vw 100
        , fontFamilies [ "Exo", "sans-serif" ]
        , textAlign center
        ]

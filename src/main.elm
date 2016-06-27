module Main exposing (main)

import Navigation

import Model exposing (init)
import View exposing (view)
import Update exposing (update, urlUpdate, urlParser)

main : Program Never
main =
  Navigation.program urlParser
    { init          = init
    , view          = view
    , update        = update
    , urlUpdate     = urlUpdate
    , subscriptions = always Sub.none
    }

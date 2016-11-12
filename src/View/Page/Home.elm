module View.Page.Home exposing (homePage)

import Html exposing
  ( Html
  , section, header
  , h1, p
  , text
  , figure
  )

import View.Asset exposing (logo)
import View.Style.Class exposing (Class(..), class)

homePage : Html a
homePage =
  section [ class [ TrueCenter ] ]
    [ header [class [FillViewport]]
        [ figure [class [Logo]] [logo]
        , h1     []             [text "Robot Overlord"]
        ]
    ]

-- homePage =
--   section [ class [ FillPage ] ]
--     [ header [ class [ FillViewport ] ]
--         [ h1 [ class [ Logo ] ]
--             [ text "Robot", logo, text "Overlord"]
--         ]
--     , section []
--         [ h1 [] [ text "We Ship High Quality Products" ]
--         , p []
--             [ text "We work with exciting clients to ship defining products. "
--             , text ""
--             ]
--         , p []
--             [ text "We curate leading-edge, best-in-class technologies."
--             , text ""
--             ]
--         ]
--     ]

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
    , openSource
    ]

openSource : Html Signal
openSource =
  section []
    [ header []
        [ h1 [] [ text "Open Source" ]
        , p []
            [ text """
                We believe in investing in the future of software.
                By contributing to the open source ecosystem, we make it easier to
                create amazing software.
              """
            ]
        ]
    , section []
        [ h1 [] [ text "Elixir" ]
        , section []
            [ h1 [] [ text "Quark" ]
            , h2 [] [ text "Elixir's missing classical functional programming library" ]
            , p []
                [ text """
                    When working with Elixir, we noticed that the base libraries emphasize
                    a data-flow programming model. In Quark, we leverage some of the foundations
                    of functional programming by adding currying and standard
                    combinators such as identity, successor, and flip to promote
                    one of the greatest strengths of functional programming: reuse
                    through modular composition.
                  """
                ]
              ]
            ]
        , section []
            [ h1 [] [ text "Algae" ]
            , h2 [] [ text "Algebraic data types, or 'super structs'" ]
            , p []
                [ text """
                  """
                ]
            ]
        , section []
            [ h1 [] [ text "Witchcraft" ]
            , h2 [] [ text "Common categories and algebras" ]
            , p []
                [ text """
                  """
                ]
            ]
    , section []
        [ h1 [] [ text "Haskell" ]
        , section []
            [ h1 [] [ text "Overture" ]
            , h2 [] [ text "A friendly and modern standard library for Haskell" ]
            , p []
                [ text """
                  """
                ]
              ]
            ]

    ]

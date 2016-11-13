module Router.Match exposing (matchers)

import Router.Route exposing (Route(..))
import UrlParser exposing(Parser, format, oneOf, s)

type alias Path = String

matchers : Parser (Route -> String) String
matchers =
    oneOf
    [ Home `to` ""
    , Navigation `to` "navigate"

    , Code `to` "code"
    , Design `to` "design"

    , About `to` "about"
    , Contact `to` "contact"
    , Portfolio `to` "portfolio"
    ]

-- Simple route
to : Route -> Path -> Parser (Route -> Path) Path
to route fragment = format route (s fragment)

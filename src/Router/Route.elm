module Router.Route exposing (Route(..), resolve)

type Route
  = Home
  | NotFound

  -- Technical
  | Code
  | Design

  -- Business
  | About
  | Contact
  | Portfolio

resolve : Route -> String
resolve route =
  case route of
    Home      -> "/code"
    NotFound  -> "/404"

    Code      -> "/code"
    Design    -> "/design"

    About     -> "/about"
    Contact   -> "/contact"
    Portfolio -> "/portfolio"

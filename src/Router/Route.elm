module Router.Route exposing (Route(..), resolve)

type Route
  = Home
  | Navigation
  | NotFound

  -- Technical
  | Code
  | Design

  -- Business
  | About
  | Contact
  | Portfolio

  ------------
  -- Future --
  ------------
  -- | Experimental
  -- | OpenSource
  -- | Community


resolve : Route -> String
resolve route =
  case route of
    Home       -> "/code"
    Navigation -> "/navigation"
    NotFound   -> "/404"

    Code       -> "/code"
    Design     -> "/design"

    About      -> "/about"
    Contact    -> "/contact"
    Portfolio  -> "/portfolio"

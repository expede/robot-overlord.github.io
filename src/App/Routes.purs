module App.Routes where

-------------
-- Imports --
-------------

import Prelude

import Control.Alt ((<|>))
import Data.Maybe (fromMaybe)

import Pux.Router (Match, end, router, lit)

----------------
-- Route Data --
----------------

type ExternalURL = String

data Route
  = Home
  | About
  | OpenSource
  | Contact
  | Training TrainingRoute
  | NotFound String

data TrainingRoute
  = TrainingHome
  | FP
  | Elixir
  | Elm
  | JavaScript
  | ComingSoon

-------------
-- Routing --
-------------

match :: String -> Route
match url = fromMaybe (NotFound url) $ router url toRoute

toRoute :: Match Route
toRoute =
      Home                              <$ end
  <|> About      <$   lit "#about"      <* end
  <|> OpenSource <$   lit "#opensource" <* end
  <|> Contact    <$   lit "#contact"    <* end
  <|> Training   <$> (lit "#training"   *> toTrainingRoute)

toTrainingRoute :: Match TrainingRoute
toTrainingRoute =
      TrainingHome                     <$ end
  <|> FP           <$ lit "fp"         <* end
  <|> Elixir       <$ lit "elixir"     <* end
  <|> Elm          <$ lit "elm"        <* end
  <|> JavaScript   <$ lit "javascript" <* end
  <|> ComingSoon   <$ lit "comingsoon" <* end

-----------
-- Links --
-----------

fromRoute :: Route -> String
fromRoute route =
  case route of
    Home              -> "/"
    About             -> "/#about"
    OpenSource        -> "/#opensource"
    Contact           -> "/#contact"
    Training training -> "/#training" <> fromTrainingRoute training
    NotFound url      -> url

fromTrainingRoute :: TrainingRoute -> String
fromTrainingRoute subroute =
  case subroute of
    TrainingHome -> "/"
    FP           -> "/fp"
    Elixir       -> "/elixir"
    Elm          -> "/elm"
    JavaScript   -> "/javascript"
    ComingSoon   -> "/comingsoon"

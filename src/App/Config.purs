module App.Config where

type Config =
  { title       :: String
  , description :: String
  , public_path :: String
  }

foreign import config :: Config

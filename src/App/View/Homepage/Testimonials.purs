module App.View.Homepage.Testimonials where

-------------------
-- Language Base --
-------------------

import Data.Function (($))
import Control.Bind (discard)

---------
-- App --
---------

import App.Events (Event)

---------------
-- Framework --
---------------

import Pux.DOM.HTML (HTML)

import Text.Smolder.HTML
import Text.Smolder.HTML.Attributes (className)
import Text.Smolder.Markup          ((!), text)

----------

view :: HTML Event
view =
  section $ do
    div ! className "content"
        ! className "right" $ do

      -- div ! className "inner" $ do
      h1 $ text "What people are saying"
      h2 $ text "FP without the hard mode"

      blockquote do
        p $ text """
          I learned a lot at the Elixir bootcamp! What matters most when
          a teacher is helping their students learn something new is meeting
          people where they were at skill-wise. It was very clear and
          felt like a safe place to learn something new.
        """
        p $ text "~Stu Weir, STAT Search Analytics"

      -- h2 $ text "adpot the absolute best, pragmatic tools available"
      -- blockquote do
      --   p  $ text """
      --     Phoenix is really impressive. _______
      --   """
      --   p $ text "~Steve Godin, CodeCore"

    div ! className "img"
        ! className "right"
        $ text ""

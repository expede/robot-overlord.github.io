(ns ^:figwheel-always robot-overlord.core
  (:require [clojure.string :as string]
            [cljs.core.async :refer [chan put! close!]]
            [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))

(enable-console-print!)

;; =====
;; UTILS
;; =====
(defn start-cycle
  "Start the render cycle"
  [owner]
  (om/refresh! owner))

(defn make-visible!
  ""
  [cursor visibility-key]
  (om/update! cursor visibility-key true))

(defn zip-step!
  ""
  [cursor current target delay]
  (js/setTimeout #(do
                    (om/update! cursor :text   (str current (get target 0)))
                    (om/update! cursor :remain (subs target 1)))
                 delay))

(defn delay-start-print!
  ""
  [cursor delay key]
  (js/setTimeout #(om/update! cursor key true)
                 delay))

(defn run!
  "Run the state"
  [cursor printable current target delay]
  (cond
    (not printable)        (delay-start-print! cursor 1500 :printable)
    (string/blank? target) (make-visible! cursor :subhead-visible)
    :else                  (zip-step! cursor current target delay)))

(defn string->printable
  ""
  [[head & tail]]
  {:text head
   :remain (apply str tail)
   :printable false})

;; =====
;; STATE
;; =====
(defonce app-state (atom {:logotype   (string->printable "Robot Overlord")
                          :contact    (string->printable "Want to know more? Drop us a line!")
                          :who-we-are (string->printable "Meet Our Minions")
                          :what-we-do (string->printable "We are humans (and machines) that use leading-edge technologies to create and curate solutions to real-world problems")}))

;; ==========
;; COMPONENTS
;; ==========
(defn dropcap-sentence
  "Dropcap first letter of a sentence"
  [[first & rest :as text]]
  (dom/span nil
            (dom/span #js {:className "capital drop"} first)
            rest))

(defn oldschool
  "Text with a blinking cursor"
  [text & [{:keys [dropcap]}]]
  (dom/span nil
            (if dropcap (dropcap-sentence text) text)
            (dom/span #js {:className "blink"})))

(defn scan-title
  "Scanline-style titles"
  [title]
  (dom/h1 nil
          (dom/span #js {:className "scan text"})
          (oldschool title)))

(om/root
 (fn [{:keys [logotype]} owner]
   (let [{:keys [text remain subhead-visible printable]} logotype]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! logotype printable text remain 50))

       om/IRender
       (render [_]
         (dom/div nil
                  (dom/h1 nil
                          (oldschool text {:dropcap true}))
                  (dom/h2 #js {:className (str "fadeable " (if subhead-visible "visible" "invisible"))}
                          "Computing with "
                          (dom/em nil "humanity")))))))
 app-state
 {:target (. js/document (getElementById "logotype-app"))})

(om/root
 (fn [{:keys [what-we-do]} owner]
   (let [{:keys [text remain printable]} what-we-do]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! what-we-do printable text remain 50))

       om/IRender
       (render [_] (scan-title (:text what-we-do))))))
 app-state
 {:target (. js/document (getElementById "what-we-do-app"))})

(om/root
 (fn [{:keys [who-we-are]} owner]
   (let [{:keys [text remain printable]} who-we-are]
     (reify
         om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! who-we-are printable text remain 50))

       om/IRender
       (render [_] (dom/h1 nil (oldschool (:text who-we-are)))))))
 app-state
 {:target (. js/document (getElementById "who-we-are-app"))})

(om/root
 (fn [{:keys [contact]} owner]
   (let [{:keys [text remain printable]} contact]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! contact printable text remain 50))

       om/IRender
       (render [_] (scan-title (:text contact))))))
 app-state
 {:target (. js/document (getElementById "contact"))})

(ns ^:figwheel-always robot-overlord.core
  (:require [clojure.string :as string]
            [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]))

(enable-console-print!)

;; =====
;; UTILS
;; =====
(defn start-cycle
  "Start the render cycle"
  [owner]
  (om/refresh! owner))

(defn make-visible!
  "Set visibiloty state of some element to true"
  [cursor visibility-key]
  (om/update! cursor visibility-key true))

(defn in-duration
  "Correct duration to make whole sequence last the specified number of milliseconds"
  [duration count f]
  (let [delay (Math/floor (/ duration count))]
    (js/setTimeout f (/ duration count))))

(defn zip-step!
  "Move the text zipper one iteration forward"
  [duration cursor current target]
  (in-duration duration (count (str current target))
               #(do
                  (om/update! cursor :text   (str current (get target 0)))
                  (om/update! cursor :remain (subs target 1)))))

(defn delay-start-print!
  "Wait a period of time before setting the state to printable"
  [cursor delay key]
  (js/setTimeout #(om/update! cursor key true)
                 delay))

(defn run!
  "Run the state"
  [cursor printable current target init-delay duration] ;; NOTE: can access these properties with the cursor alone
  (cond
    (not printable)        (delay-start-print! cursor init-delay :printable)
    (string/blank? target) (make-visible! cursor :subhead-visible)
    :else                  (zip-step! duration cursor current target)))

(defn string->printable
  "Convert string to a zipper representation (for state)"
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
                          :what-we-do (string->printable "Robot Overlord is a holistic tech product & consultancy firm, focusing on leading-edge technologies, data science, and AI, to create joyful experiences")}))

;; =======
;; DISPLAY
;; =======
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

;; =========
;; APP ROOTS
;; =========
(om/root ; Logotype
 (fn [{:keys [logotype]} owner]
   (let [{:keys [text remain subhead-visible printable]} logotype]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! logotype printable text remain 1500 1500))

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

(om/root ; What We Do
 (fn [{:keys [what-we-do]} owner]
   (let [{:keys [text remain printable]} what-we-do]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! what-we-do printable text remain 2000 1500))

       om/IRender
       (render [_] (scan-title (:text what-we-do))))))
 app-state
 {:target (. js/document (getElementById "what-we-do-app"))})

(om/root ; Who We Are
 (fn [{:keys [who-we-are]} owner]
   (let [{:keys [text remain printable]} who-we-are]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! who-we-are printable text remain 2000 1500))

       om/IRender
       (render [_] (dom/h1 nil (oldschool (:text who-we-are)))))))
 app-state
 {:target (. js/document (getElementById "who-we-are-app"))})

(om/root ; Contact Section
 (fn [{:keys [contact]} owner]
   (let [{:keys [text remain printable]} contact]
     (reify
       om/IDidMount
       (did-mount [_] (start-cycle owner))

       om/IDidUpdate
       (did-update [_ _ _]
         (run! contact printable text remain 2000 1000))

       om/IRender
       (render [_] (scan-title (:text contact))))))
 app-state
 {:target (. js/document (getElementById "contact-app"))})

# Product Proposal for movieStillsAI -- A landing page demonstrator

Built with **React**, CSS, Node.js

Hosted on Firebase

Design: Figma, Adobe XD

View Project: https://moviestillsai.web.app/#

Images courtesy of google image search

# Run

$ 'npm install' for dependencies

$ 'yarn start' to begin application

# Project

movieStillsAi is a fun website for movie and photography lovers to view their favorite images with AI generated
analysis data. What constitutes a beautiful image? What techniques are used in filming? What lighting and
composition contribute to a scene. Visit and find out

# Progress

1. Landing page is complete, along with most of the front-end functionality. The page so far is mostly composed of
   state and event listeners.
2. At the moment, the JSON data was not used and all of the data is hard coded. A few more scenes will
   be added along with a scroll-able gallery and full-screen viewer with the same analysis data.
3. The navigation functions will need to be fixed with the database.
4. The search was removed as there isn't enough data yet.

# Goals

Would like to study what types of or combinations of neural networks & algorithms & ML tools would be suitable
to do this type of analysis. How to organize this data, and be able to feed it on demand to users on the website.
In the short term, if there would be at least 100 scenes loaded in, it could actually be a fun little project for
friends and family to play along with. Would also like to get an actual upload tool working so users could submit
their own photos for analysis.

# Incoming Updates

1. Navbar will change from CSS to a React.js function.
2. Will reorganize analysis component buttons to show data in different layers: Lighting, Composition, Intent
3. Another component should be added to show how the overlays are generated and what methods are used in
   our photography analysis (Dynamic Symmetry, 9-Grid & Golden Ratios).
4. Updates from hard-coded returns inside functions into JSON data displayed through Axios
5. Minor styling updates to CSS to enable more screen types
6. Explore & Fullscreen Views
7. Gallery added to About.js Component
8. A few more screens will be added.

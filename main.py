import webapp2
import jinja2
import os
from google.appengine.api import urlfetch

the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class HomePage(webapp2.RequestHandler):
    def get(self):
        home_template = the_jinja_env.get_template('templates/home.html')
        self.response.write(home_template.render())

class GamePage(webapp2.RequestHandler):
    def get(self):
        game_template = the_jinja_env.get_template('templates/game.html')
        self.response.write(game_template.render())

class AboutMePage(webapp2.RequestHandler):
    def get(self):
        aboutme_template = the_jinja_env.get_template('templates/aboutme.html')
        self.response.write(aboutme_template.render())

class PlayPage(webapp2.RequestHandler):
    def get(self):
        play_template = the_jinja_env.get_template('templates/howtoplay.html')
        self.response.write(play_template.render())

app = webapp2.WSGIApplication([
    ('/', HomePage),
    ('/game', GamePage),
    ('/aboutme',AboutMePage),
    ('/howtoplay',PlayPage),
], debug=True)

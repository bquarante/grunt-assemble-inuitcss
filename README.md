grunt-assemble-inuitcss
=======================

just tried to follow this article
http://www.gpmd.co.uk/blog/front-end-process-flat-builds-and-automation-part-2-environment-setup-and-yeoman/

and make it works...(i had to change some little stuff)

to do :

git clone git@github.com:bquarante/grunt-assemble-inuitcss.git

cd grunt-assemble-inuitcss/

bower install

sudo npm install

cd app/bower_components/

git clone --recursive git@github.com:csswizardry/inuit.css-web-template.git inuit.css

cd ../../

grunt

grunt server

require 'uglifier'

task :default do
  js = Uglifier.compile(File.read("jquery.selectasaur.js"))
  File.open('jquery.selectasaur.min.js', 'w') { |f| f.write(js) }
end
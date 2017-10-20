#!/bin/sh
#cd ~/Documents/searchtest
export TESTSITE=$1
URLs="./test/specs/data/$TESTSITE/URLs.csv"

#while read page
while IFS=, read -r title url
do
	#echo "title=$title | url=$url"
	export TITLE=$title
	export URL=$url
	npm run-script test
done < $URLs

#npm run-script test_var

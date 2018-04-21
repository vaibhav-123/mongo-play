module.exports = {
	"dataSchema": {
		"title": "",
		"description": "In this section we would like to understand your headaches and all associated features you experience in more detail. We will ask you about the levels of pain you experience and any symptoms affecting your eyes, ears, speech, balance, nose and temperature feeling. We will also ask about what triggers your headaches such as excercise, habits or foods. This information will further inform how we can best provide care to you and may help you understand your headaches better.",
		"type": "object",
		"properties": {
			"hd2_headache_symptom_section": {
				"title": "Section 1: When you have a headache, do you experience any of the following?",
				"type": "object",
				"properties": {
					"hd2_nausea": {
						"title": "Nausea",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_vomiting": {
						"title": "Vomiting",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_Nonvertigo": {
						"title": "Dizziness: Nonvertigo (The feeling of unsteadiness, lightheadedness, motion sickness)",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_Vertigo": {
						"title": "Vertigo/Dizziness (The feeling that you or your environment is moving or spinning; an illusion of movement)",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_neckpain": {
						"title": "Neck pain or stiffness",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_lightsensitivity": {
						"title": "Sensitivity to light",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_noisesenstivity": {
						"title": "Sensitivity to noise",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_smellsensitivity": {
						"title": "Sensitivity to smell",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_Paworse": {
						"title": "Pain made worse by routine physical activity",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_oneside": {
						"title": "Pain on one side of head only",
						"$ref": "#/definitions/symptomFrequencyEnum"				
					},
					"hd2_Maworse": {
						"title": "Pain made worse by routine mental activity (e.g. concentrating, reading)",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_weakness": {
						"title": "Weakness on one side (e.g. one side of face, one arm, one leg; do not include generalized weakness or fatigue)",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_lights": {
						"title": "Seeing shimmering lights, lines, dark spots, other shapes or colors",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_onesidenumb": {
						"title": "One-sided numbness of lips, tongue, fingers, or legs",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_worddiff": {
						"title": "Difficulty finding words, expressing yourself verbally or in writing, or fully understanding what others are saying",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_redeye": {
						"title": "Red or bloodshot eye",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_redbloodshoteyeside" : {
						"title" : "On which side does red or bloodshot eye occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_eyecry" : {
						"title" : "Tearing/crying from the eye",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_teraingcryingside" : {
						"title" : "On which side does the tearing/crying from the eye occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_droop" : {
						"title" : "Eyelid drooping",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_eyelideyeliddroopingside" : {
						"title" : "On which side does the eyelid drooping occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_eyeswell" : {
						"title" : "Swelling around eye",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_eyelidswellingside" : {
						"title" : "On which side does the swelling around eye occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_runnynose" : {
						"title" : "Runny Nose ",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_runnynoseside" : {
						"title" : "On which side does the runny nose occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_suffnasal" : {
						"title" : "Nasal congestion/stuffiness",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_nasalcongestionstuffinessside" : {
						"title" : "On which side does the nasal congestion/stuffiness occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_facered" : {
						"title" : "Forehead and/or facial sweating",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_facialforeheadsweatingside" : {
						"title" : "On which side does the forehead and/or facial sweating occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_paleface" : {
						"title" : "Forehead and/or facial flushing/redness",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_earhd2lll" : {
						"title" : "Sensation of fullness in the ear",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_earhd2llnesssensation" : {
						"title" : "On which side does the sensation of fullness in the ear occur?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_smallerpupill" : {
						"title" : "Pupil is smaller than usual (i.e. constriction of the pupil)",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_smallerpupil" : {
						"title" : "On which side is the pupil smaller than usual?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_largerpupill" : {
						"title" : "Pupil is larger than usual (i.e. dilation of the pupil)",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_largerpupil" : {
						"title" : "On which side is the pupil larger than usual?",
						"$ref" : "#/definitions/headacheTypeEnum"
					},
					"hd2_restlessagitatedstate" : {
						"title" : "Restless/agitated state (e.g. pacing, rocking, hitting the head)",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_feelingcolder" : {
						"title" : "Feeling colder than normal",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_feelinghotter" : {
						"title" : "Feeling hotter than normal",
						"$ref" : "#/definitions/symptomFrequencyEnum"
					},
					"hd2_awakenfromsleep": {
						"title": "My headaches wake me up from sleep",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_headacheonawakening": {
						"title": "My headaches are present when I normally wake up",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_morningheadache": {
						"title": "My headaches occur in the morning after I am awake and out of bed",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_afternooneveningheadache": {
						"title": "My headaches occur in the afternoon or evening",
						"$ref": "#/definitions/symptomFrequencyEnum"
					}
				}
			},
			"hd2_headache_causes_section":{
				"title": "Section 2",
				"type": "object",
				"properties": {
					"hd2_mostfrequent": {
						"title": "Which of the following symptoms do you most frequently find to be the most bothersome during a headache?",			
						"$ref": "#/definitions/headacheSymptomEnum"
					},
					"hd2_notallsymptoms": {
						"title": "Not all symptoms are present with all migraine attacks. When present, which of the following symptoms do you find to be the most bothersome during a headache?",
						"$ref": "#/definitions/headacheSymptomEnum"
					},
					"hd2_triggeredheadache": {
						"title": "Which of the following do you believe have ever triggered your headaches?",
						"type": "array",
						"uniqueItems": true,
						"items": {
							"type": "integer",
							"$ref": "#/definitions/headacheTriggeringStuffEnum"
						}		
					},
					"hd2_triggeredheadacheoth": {
						"type": "string",
						"title": "Other"				
					},
					"hd2_whichfood": {
						"type": "string",
						"title": "Which foods trigger your headaches?"				
					},
					"hd2_whichalcohol": {
						"type": "string",
						"title": "Which alcohols trigger your headaches?"				
					},
					"hd2_consistentheadache": {
						"title": "Which of the following do you believe consistently and almost always trigger your headaches?",
						"type": "array",
						"uniqueItems": true,
						"items": {
							"type": "integer",
							"$ref": "#/definitions/headacheTriggeringStuffEnum"
						}			
					},
					"hd2_consistentheadacheoth": {
						"type": "string",
						"title": "Other"				
					},
					"hd2_mensturation": {
						"title": "How often is menstruation a trigger for your headaches:",
						"$ref": "#/definitions/symptomFrequencyEnum"
					},
					"hd2_yesmensturation": {
						"title": "If menstruation is a trigger for your headaches, when does the headache occur:",
						"type": "integer",
						"anyOf": [
							{
								"type": "integer",
								"title": "5-7 days before onset of menstrual flow",
								"enum": [1]						
							},
							{
								"type": "integer",
								"title": "3-4 days before onset of menstrual flow",
								"enum": [2]						
							},
							{
								"type": "integer",
								"title": "2 days before onset of menstrual flow",
								"enum": [3]						
							},
							{
								"type": "integer",
								"title": "1 day before onset of menstrual flow",
								"enum": [4]						
							},
							{
								"type": "integer",
								"title": "On the same day as menstrual flow",
								"enum": [5]						
							},
							{
								"type": "integer",
								"title": "1 day after onset of menstrual flow",
								"enum": [6]						
							},
							{
								"type": "integer",
								"title": "2 days after onset of menstrual flow",
								"enum": [7]						
							},
							{
								"type": "integer",
								"title": "3-4 days after onset of menstrual flow",
								"enum": [8]						
							},
							{
								"type": "integer",
								"title": "5-7 days after onset of menstrual flow",
								"enum": [9]						
							}
						]					
					},
					"hd2_caffeinatedcoffee": {
						"title": "How many 8 oz cups of caffeinated coffee do you drink per day?",
						"$ref": "#/definitions/drinkQuantityEnum"
					},
					"hd2_caffeinatedtea": {
						"title": "How many 8 oz cups of caffeinated tea do you drink per day?",
						"$ref": "#/definitions/drinkQuantityEnum"
					},
					"hd2_caffeinatedsoda": {
						"title": "How many 12 oz portions of caffeinated soda do you drink per day?",
						"$ref": "#/definitions/drinkQuantityEnum"
					},
					"hd2_energydrinks": {
						"title": "How many energy drinks (i.e. caffeine in combination with ingredients such as sugar, amino acids, herbal extracts, B vitamins) do you consume per day?",
						"$ref": "#/definitions/drinkQuantityEnum"
					},
					"hd2_beverages": {
						"title": "How many beverages with artificial sweetener (e.g. aspartame) do you drink per day?",
						"$ref": "#/definitions/drinkQuantityEnum"
					},
					"hd2_smoked": {
						"title": "Have you ever smoked?",
						"type": "integer",
						"anyOf": [
							{
								"type": "integer",
								"title": "I have never smoked",
								"enum": [0]						
							},
							{
								"type": "integer",
								"title": "I currently smoke",
								"enum": [1]						
							},
							{
								"type": "integer",
								"title": "I used to smoke",
								"enum": [2]						
							}
						]
					},
					"hd2_howmanysmoked": {
						"type": "string",
						"title": "How many cigarettes each day?"				
					},
					"hd2_fhowmanyyearssmoked": {
						"type": "string",
						"title": "For how many years?"				
					},
					"hd2_smokequitmonth": {
						"title": "When did you quit smoking(month)?",
						"$ref": "#/definitions/monthsEnum"
					},
					"hd2_smokequityear": {
						"type": "string",
						"title": "When did you quit smoking (year)?"				
					},
					"hd2_drinkalcohol": {
						"title": "Do you drink alcohol?",
						"type": "integer",
						"anyOf": [
							{
								"type": "integer",
								"title": "I never drank alcohol",
								"enum": [0]						
							},
							{
								"type": "integer",
								"title": "I currently drink alcohol",
								"enum": [1]						
							},
							{
								"type": "integer",
								"title": "I used to drink alcohol",
								"enum": [2]						
							}
						]
					},
					"hd2_howmanydrinks": {
						"type": "string",
						"title": "How many drinks each week?"				
					},
					"hd2_drinkyears": {
						"type": "string",
						"title": "For how many years?"
					},
					"hd2_alcoholquitmonth": {
						"title": "When did you quit drinking(month)?",
						"$ref": "#/definitions/monthsEnum"
					},
					"hd2_alcoholquityear": {
						"type": "string",
						"title": "When did you quit drinking (year)?"				
					},
					"hd2_excercisedays": {
						"title": "How many days per week do you exercise?",
						"type": "integer",
						"anyOf": [
							{
								"type": "integer",
								"title": "0",
								"enum": [0]						
							},
							{
								"type": "integer",
								"title": "1",
								"enum": [1]						
							},
							{
								"type": "integer",
								"title": "2",
								"enum": [2]						
							},
							{
								"type": "integer",
								"title": "3",
								"enum": [3]						
							},
							{
								"type": "integer",
								"title": "4",
								"enum": [4]						
							},
							{
								"type": "integer",
								"title": "5",
								"enum": [5]						
							},
							{
								"type": "integer",
								"title": "6",
								"enum": [6]						
							},
							{
								"type": "integer",
								"title": "7",
								"enum": [7]						
							}
						]
					},
					"hd2_minutesexcercise": {
						"type": "number",
						"title": "On those days, how many minutes do you exercise? "				
					},
					"hd2_longregularly": {
						"title": "How long have you regularly exercised? ",
						"type": "integer",
						"anyOf": [					
							{
								"type": "integer",
								"title": "< 6 Months",
								"enum": [1]						
							},
							{
								"type": "integer",
								"title": "6-12 months",
								"enum": [2]						
							},
							{
								"type": "integer",
								"title": "1-2 years",
								"enum": [3]						
							},
							{
								"type": "integer",
								"title": "3-5 years",
								"enum": [4]						
							},
							{
								"type": "integer",
								"title": "6-10 years",
								"enum": [5]						
							},
							{
								"type": "integer",
								"title": ">10 years",
								"enum": [6]						
							}
						]
					},
					"hd2_history": {
						"title": "Have you ever had a head injury? A head injury may be a hit to the head that caused headaches, dazed feeling, mental fogginess, lightheadedness, blurred vision, dizziness or vomiting.",
						"$ref": "#/definitions/yesNoEnum"
					},
					"hd2_beforeinjury": {
						"title": "Did you have headaches before this head injury?",
						"$ref": "#/definitions/yesNoEnum"
					},
					"hd2_recentheadinjury": {
						"title": "Starting with the most recent head injury (if you have had multiple), what was the date of the head injury? Month",
						"$ref": "#/definitions/months2Enum"									
					},
					"hd2_recentheadinjuryyear": {
						"type": "string",
						"title": "Year"
					},
					"hd2_headinjurythecause": {
						"title": "We would like to determine if your headaches that you had before the injury got worse or if you developed new headaches following the injury. Did you have new headaches as a result of this head injury?",
						"$ref": "#/definitions/yesNoOtherEnum"					
					},
					"hd2_newheadache": {
						"title": "How long after the head injury did your new headaches begin?",
						"$ref": "#/definitions/headInjuryTriggerHeadacheEnum"
					},
					"hd2_prevwors": {
						"title": "Did you have a significant worsening of your previous headaches following this head injury?",
						"$ref": "#/definitions/yesNoOtherEnum"
					},
					"hd2_worse": {
						"title": "How long after your head injury did your headaches worsen?",
						"$ref": "#/definitions/headInjuryTriggerHeadacheEnum"
					},
					"hd2_CL": {
						"title": "Did you experience loss of consciousness at the time of your head injury? ",
						"$ref": "#/definitions/yesNoOtherEnum"
					},
					"hd2_longCL": {
						"title": "For how long did you lose consciousness?",
						"$ref": "#/definitions/effectInMinutesEnum"
					},
					"hd2_amnesiaheadinjury": {
						"title": "Did you experience amnesia (loss of memory) at the time of your head injury?",
						"$ref": "#/definitions/yesNoOtherEnum"			
					},
					"hd2_amnesiaperiod": {
						"title": "For how long did you experience amnesia (loss of memory)?",
						"$ref": "#/definitions/effectInMinutesEnum"
					},
					"hd2_bfstsinjury": {
						"title": "Did you experience brain fog, slowed thinking and sluggishness at the time of your injury? (Alteration of consciousness)",
						"$ref": "#/definitions/yesNoOtherEnum"				
					},
					"hd2_bfstsperiod": {
						"title": "For how long did you experience brain fog, slowed thinking and sluggishness?",
						"$ref": "#/definitions/effectInMinutesEnum"
					},
					"hd2_symptomsfollowingheadinjury": {
						"title": "Now we are going to ask you questions about symptoms that you had immediately following the head injury and those that you currently have due to the head injury. Do you remember any of the symptoms associated with this head injury?",
						"$ref": "#/definitions/yesNoEnum"
					}
				}
			},
			"hd2_head_injury_symptom_section": {
				"title": "Section 3: What symptoms did you have immediately following the head injury?",
				"type": "object",
				"properties": {
					"hd2_TBIPheadache": {
						"title": "Headache",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIPressurehead": {
						"title": "Pressure in head",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIneckpain": {
						"title": "Neck Pain",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBInausiavomiting": {
						"title": "Nausea or vomiting",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIdizziness": {
						"title": "Dizziness",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIblurredvision": {
						"title": "Blurred Vision ",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIbalanceproblems": {
						"title": "Balance Problems",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIsensitivitytolight": {
						"title": "Sensitivity to light",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIsensitivitynOSE": {
						"title": "Sensitivity to noise",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIsloweddown": {
						"title": "Feeling slowed down",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIfog": {
						"title": "Feeling like 'in a fog'",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBInotright": {
						"title": "Don’t feel right",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIconcentratingdifficulty": {
						"title": "Difficulty concentrating",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIdifficultyremebering": {
						"title": "Difficulty remembering",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIfatigue": {
						"title": "Fatigue or low energy",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIconhd2sion": {
						"title": "Confusion",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIdrowsiness": {
						"title": "Drowsiness",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBItroublefallasleep": {
						"title": "Trouble falling asleep",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBImoreemotional": {
						"title": "More emotional",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIirritability": {
						"title": "Irritability",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBIsadness": {
						"title": "Sadness",
						"$ref": "#/definitions/painSeverityEnum"
					},
					"hd2_TBInervousanxious": {
						"title": "Nervous or anxious",
						"$ref": "#/definitions/painSeverityEnum"
					}
				}
			}
		},
		"definitions": {
			"symptomFrequencyEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Never",
						"enum": [0]						
					},
					{
						"type": "integer",
						"title": "Rarely",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "Less than half the time",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "Half the time or more",
						"enum": [3]
							
					},
					{
						"type": "integer",
						"title": "Always",
						"enum": [4]						
					}
				]			
			},
		    "headacheTriggeringStuffEnum":{
		    	"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Foods ",
						"enum": [1]
					},
					{
						"type": "integer",
						"title": "Beverages (non-alcoholic) ",
						"enum": [2]
					},
					{
						"type": "integer",
						"title": "Caffeine",
						"enum": [3]
					},
					{
						"type": "integer",
						"title": "Hunger",
						"enum": [4]
					},
					{
						"type": "integer",
						"title": "Alcohol",
						"enum": [5]
					},
					{
						"type": "integer",
						"title": "Fatigue",
						"enum": [6]
					},
					{
						"type": "integer",
						"title": "Lack of Sleep or sleep disruption",
						"enum": [7]
					},
					{
						"type": "integer",
						"title": "Too much sleep",
						"enum": [8]
					},
					{
						"type": "integer",
						"title": "Medications",
						"enum": [9]
					},
					{
						"type": "integer",
						"title": "Sex/orgasm",
						"enum": [10]
					},
					{
						"type": "integer",
						"title": "Physical Exertion",
						"enum": [11]
					},
					{
						"type": "integer",
						"title": "Coughing, sneezing, bending, straining",
						"enum": [12]
					},
					{
						"type": "integer",
						"title": "Menstruation",
						"enum": [13]
					},
					{
						"type": "integer",
						"title": "Stress",
						"enum": [14]
					},
					{
						"type": "integer",
						"title": "Stress let-down (i.e. moving from a time of high stress to lower stress)",
						"enum": [15]
					},
					{
						"type": "integer",
						"title": "Loud Sounds",
						"enum": [16]
					},
					{
						"type": "integer",
						"title": "Bright Lights or Sun",
						"enum": [17]
					},
					{
						"type": "integer",
						"title": "Visual patterns (e.g. blinds, tile floors0",
						"enum": [18]
					},
					{
						"type": "integer",
						"title": "Odors ",
						"enum": [19]
					},
					{
						"type": "integer",
						"title": "Weather Changes",
						"enum": [20]
					},
					{
						"type": "integer",
						"title": "Altitude change (low to high)",
						"enum": [21]
					},
					{
						"type": "integer",
						"title": "Smoke",
						"enum": [22]
					},
					{
						"type": "integer",
						"title": "Becoming Overheated",
						"enum": [23]
					},
					{
						"type": "integer",
						"title": "Concentrating, reading",
						"enum": [24]
					},
					{
						"type": "integer",
						"title": "Screen time (smart phone/tablet/computer)",
						"enum": [25]
					},
					{
						"type": "integer",
						"title": "I do not know what triggers my headaches",
						"enum": [26]
					},
					{
						"type": "integer",
						"title": "Other",
						"enum": [27]
					}
				]
		    },
			"headacheSymptomEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Nausea",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "Vomiting",
						"enum": [2]					
					},
					{
						"type": "integer",
						"title": "Sensitivity to Light",
						"enum": [3]		
					},
					{
						"type": "integer",
						"title": "Sensitivity to Sound",
						"enum": [4]		
					},
					{
						"type": "integer",
						"title": "Sensitivity to Odors",
						"enum": [5]		
					},
					{
						"type": "integer",
						"title": "Dizziness",
						"enum": [6]					
					},{
						"type": "integer",
						"title": "Difficulty thinking and understanding clearly",
						"enum": [7]	
					},{
						"type": "integer",
						"title": "Ringing in the Ears ",
						"enum": [8]	
					},{
						"type": "integer",
						"title": "Visual Disturbance",
						"enum": [9]		
					},
					{
						"type": "integer",
						"title": "Fatigue",
						"enum": [10]						
					},
					{
						"type": "integer",
						"title": "Skin sensitivity",
						"enum": [11]			
					},
					{
						"type": "integer",
						"title": "I do not have any of these symptoms",
						"enum": [77]		
					}
				]			
			},
			"monthsEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "January",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "February",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "March",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "April ",
						"enum": [4]					
					},
					{
						"type": "integer",
						"title": "May ",
						"enum": [5]						
					},
					{
						"type": "integer",
						"title": "June ",
						"enum": [6]						
					},
					{
						"type": "integer",
						"title": "July ",
						"enum": [7]						
					},
					{
						"type": "integer",
						"title": "August ",
						"enum": [8]					
					},
					{
						"type": "integer",
						"title": "September",
						"enum": [9]						
					},
					{
						"type": "integer",
						"title": "October",
						"enum": [10]						
					},
					{
						"type": "integer",
						"title": "November",
						"enum": [11]						
					},
					{
						"type": "integer",
						"title": "December",
						"enum": [12]					
					}
				]
			},
			"months2Enum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "January",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "February",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "March",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "April ",
						"enum": [4]					
					},
					{
						"type": "integer",
						"title": "May ",
						"enum": [5]						
					},
					{
						"type": "integer",
						"title": "June ",
						"enum": [6]						
					},
					{
						"type": "integer",
						"title": "July ",
						"enum": [7]						
					},
					{
						"type": "integer",
						"title": "August ",
						"enum": [8]					
					},
					{
						"type": "integer",
						"title": "September",
						"enum": [9]						
					},
					{
						"type": "integer",
						"title": "October",
						"enum": [10]						
					},
					{
						"type": "integer",
						"title": "November",
						"enum": [11]						
					},
					{
						"type": "integer",
						"title": "December",
						"enum": [12]					
					},
					{
						"type": "integer",
						"title": "I don't remember",
						"enum": [88]										
					}
				]
			},
			"yesNoEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Yes",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "No",
						"enum": [0]						
					}
				]
			},
			"yesNoOtherEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Yes",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "No",
						"enum": [0]						
					},
					{
						"type": "integer",
						"title": "I don't know",
						"enum": [66]						
					}
				]
			},
			"drinkQuantityEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "<1",
						"enum": [0]						
					},
					{
						"type": "integer",
						"title": "1",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "2",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "3",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "4",
						"enum": [4]						
					},
					{
						"type": "integer",
						"title": "More than 5",
						"enum": [5]						
					}
				]
			},
			"painSeverityEnum": {
				"type": "integer",
				"anyOf": [			
					{
						"type": "integer",
						"title": "0, None",
						"enum": [0]						
					},
					{
						"type": "integer",
						"title": "1, Mild",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "2, Mild",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "3, Moderate",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "4, Moderate",
						"enum": [4]					
					},
					{
						"type": "integer",
						"title": "5, Severe",
						"enum": [5]						
					},
					{
						"type": "integer",
						"title": "6, Severe",
						"enum": [6]						
					}
				]
			},
			"headacheTypeEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Same side as headache",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "Opposite side of headache",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "Both nostrils but worse on side of headache",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "Both nostrils equally",
						"enum": [4]					
					}
				]
			},
			"headInjuryTriggerHeadacheEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "Immediately",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "Less than 2 hours",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "2-12 hours",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "13-24 hours ",
						"enum": [4]					
					},
					{
						"type": "integer",
						"title": "1 to 3 days",
						"enum": [5]						
					},
					{
						"type": "integer",
						"title": "4 to 7 days",
						"enum": [6]						
					},
					{
						"type": "integer",
						"title": "1 to 2 weeks",
						"enum": [7]						
					},
					{
						"type": "integer",
						"title": "2 to 3 weeks",
						"enum": [8]					
					},
					{
						"type": "integer",
						"title": "3 to 4 weeks",
						"enum": [9]						
					},
					{
						"type": "integer",
						"title": "1 to 2 months",
						"enum": [10]						
					},
					{
						"type": "integer",
						"title": "2 to 3 months",
						"enum": [11]						
					},
					{
						"type": "integer",
						"title": "I don't remember",
						"enum": [88]					
					}
				]
			},
			"effectInMinutesEnum": {
				"type": "integer",
				"anyOf": [
					{
						"type": "integer",
						"title": "< 1 minute",
						"enum": [1]						
					},
					{
						"type": "integer",
						"title": "1-29 minutes",
						"enum": [2]						
					},
					{
						"type": "integer",
						"title": "30-59 minutes",
						"enum": [3]						
					},
					{
						"type": "integer",
						"title": "1-24 hours",
						"enum": [4]					
					},
					{
						"type": "integer",
						"title": "1-7 days",
						"enum": [5]						
					},
					{
						"type": "integer",
						"title": "> 7 days",
						"enum": [6]						
					},
					{
						"type": "integer",
						"title": "Don't know",
						"enum": [66]					
					}
				]
			}
		}
	},
	"uiSchema": {
		"ui:order": ["hd2_headache_symptom_section", "hd2_headache_causes_section", "hd2_head_injury_symptom_section"],
		"hd2_headache_symptom_section": {
			"ui:order": [
				"hd2_nausea",
				"hd2_vomiting",
				"hd2_Nonvertigo",
				"hd2_Vertigo",
				"hd2_neckpain",
				"hd2_lightsensitivity",
				"hd2_noisesenstivity",
				"hd2_smellsensitivity",
				"hd2_Paworse",
				"hd2_oneside",
				"hd2_Maworse",
				"hd2_weakness",
				"hd2_lights",
				"hd2_onesidenumb",
				"hd2_worddiff",
				"hd2_redeye",
				"hd2_redbloodshoteyeside",
				"hd2_eyecry",
				"hd2_teraingcryingside",
				"hd2_droop",
				"hd2_eyelideyeliddroopingside",
				"hd2_eyeswell",
				"hd2_eyelidswellingside",
				"hd2_runnynose",
				"hd2_runnynoseside",
				"hd2_suffnasal",
				"hd2_nasalcongestionstuffinessside",
				"hd2_facered",
				"hd2_facialforeheadsweatingside",
				"hd2_paleface",
				"hd2_earhd2lll",
				"hd2_earhd2llnesssensation",
				"hd2_smallerpupill",
				"hd2_smallerpupil",
				"hd2_largerpupill",
				"hd2_largerpupil",
				"hd2_restlessagitatedstate",
				"hd2_feelingcolder",
				"hd2_feelinghotter",
				"hd2_awakenfromsleep",
				"hd2_headacheonawakening",
				"hd2_morningheadache",
				"hd2_afternooneveningheadache"
			],
			"hd2_nausea": {
				"ui:widget": "select"
			},
			"hd2_vomiting": {
				"ui:widget": "select"
			},
			"hd2_Nonvertigo": {
				"ui:widget": "select"
			},
			"hd2_Vertigo": {
				"ui:widget": "select"
			},
			"hd2_neckpain": {
				"ui:widget": "select"
			},
			"hd2_lightsensitivity": {
				"ui:widget": "select"
			},
			"hd2_noisesenstivity": {
				"ui:widget": "select"
			},
			"hd2_smellsensitivity": {
				"ui:widget": "select"
			},
			"hd2_Paworse": {
				"ui:widget": "select"
			},
			"hd2_oneside": {
				"ui:widget": "select"
			},
			"hd2_Maworse": {
				"ui:widget": "select"
			},
			"hd2_weakness": {
				"ui:widget": "select"
			},
			"hd2_lights": {
				"ui:widget": "select"
			},
			"hd2_onesidenumb": {
				"ui:widget": "select"
			},
			"hd2_worddiff": {
				"ui:widget": "select"
			},
			"hd2_redeye": {
				"ui:widget": "select"
			},
			"hd2_redbloodshoteyeside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_redeye": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_eyecry": {
				"ui:widget": "select"
			},
			"hd2_teraingcryingside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_eyecry": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_droop": {
				"ui:widget": "select"
			},
			"hd2_eyelideyeliddroopingside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_droop": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_eyeswell": {
				"ui:widget": "select"
			},
			"hd2_eyelidswellingside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_eyeswell": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_runnynose": {
				"ui:widget": "select"
			},
			"hd2_runnynoseside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_runnynose": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_suffnasal": {
				"ui:widget": "select"
			},
			"hd2_nasalcongestionstuffinessside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_suffnasal": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_facered": {
				"ui:widget": "select"
			},
			"hd2_facialforeheadsweatingside": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_facered": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_paleface": {
				"ui:widget": "select"
			},
			"hd2_earhd2lll": {
				"ui:widget": "select"
			},
			"hd2_earhd2llnesssensation": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_earhd2lll": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_smallerpupill": {
				"ui:widget": "select"
			},
			"hd2_smallerpupil": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_smallerpupill": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_largerpupill": {
				"ui:widget": "select"
			},
			"hd2_largerpupil": {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_symptom_section.hd2_largerpupill": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_restlessagitatedstate": {
				"ui:widget": "select"
			},
			"hd2_feelingcolder": {
				"ui:widget": "select"
			},
			"hd2_feelinghotter": {
				"ui:widget": "select"
			},
			"hd2_awakenfromsleep": {
				"ui:widget": "select"
			},
			"hd2_headacheonawakening": {
				"ui:widget": "select"
			},
			"hd2_morningheadache": {
				"ui:widget": "select"
			},
			"hd2_afternooneveningheadache": {
				"ui:widget": "select"
			}
		},
		"hd2_headache_causes_section": {
			"ui:order": [
				"hd2_mostfrequent",
				"hd2_notallsymptoms",
				"hd2_triggeredheadache",
				"hd2_triggeredheadacheoth",
				"hd2_whichfood",
				"hd2_whichalcohol",
				"hd2_consistentheadache",
				"hd2_consistentheadacheoth",
				"hd2_mensturation",
				"hd2_yesmensturation",
				"hd2_caffeinatedcoffee",
				"hd2_caffeinatedtea",
				"hd2_caffeinatedsoda",
				"hd2_energydrinks",
				"hd2_beverages",
				"hd2_smoked",
				"hd2_howmanysmoked",
				"hd2_fhowmanyyearssmoked",
				"hd2_smokequitmonth",
				"hd2_smokequityear",
				"hd2_drinkalcohol",
				"hd2_howmanydrinks",
				"hd2_drinkyears",
				"hd2_alcoholquitmonth",
				"hd2_alcoholquityear",
				"hd2_excercisedays",
				"hd2_minutesexcercise",
				"hd2_longregularly",
				"hd2_history",
				"hd2_beforeinjury",
				"hd2_recentheadinjury",
				"hd2_recentheadinjuryyear",
				"hd2_headinjurythecause",
				"hd2_newheadache",
				"hd2_prevwors",
				"hd2_worse",
				"hd2_CL",
				"hd2_longCL",
				"hd2_amnesiaheadinjury",
				"hd2_amnesiaperiod",
				"hd2_bfstsinjury",
				"hd2_bfstsperiod",
				"hd2_symptomsfollowingheadinjury"
			],
			"hd2_mostfrequent" : {
				"ui:widget": "select"
			},
			"hd2_notallsymptoms" : {
				"ui:widget": "select"
			},
			"hd2_triggeredheadache" : {
				"ui:widget": "select"
			},
			"hd2_triggeredheadacheoth" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_triggeredheadache": {"$eq": 27}
				}
			},
			"hd2_whichfood" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_triggeredheadache": {"$eq": 1}
				}
			},
			"hd2_whichalcohol" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_triggeredheadache": {"$eq": 5}
				}
			},
			"hd2_consistentheadache" : {
				"ui:widget": "select"
			},
			"hd2_consistentheadacheoth" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_consistentheadache": {"$eq": 27}
				}
			},
			"hd2_mensturation" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.gender": {"$eq": "Female"}
				}
			},
			"hd2_yesmensturation" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_mensturation": {"$in": [1, 2, 3, 4]}
				}
			},
			"hd2_caffeinatedcoffee" : {
				"ui:widget": "select"
			},
			"hd2_caffeinatedtea" : {
				"ui:widget": "select"
			},
			"hd2_caffeinatedsoda" : {
				"ui:widget": "select"
			},
			"hd2_energydrinks" : {
				"ui:widget": "select"
			},
			"hd2_beverages" : {
				"ui:widget": "select"
			},
			"hd2_smoked" : {
				"ui:widget": "select"
			},
			"hd2_howmanysmoked" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_smoked": {"$in": [1, 2]}
				}
			},
			"hd2_fhowmanyyearssmoked" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_smoked": {"$in": [1, 2]}
				}
			},
			"hd2_smokequitmonth" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_smoked": {"$eq": 2}
				}
			},
			"hd2_smokequityear" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_smoked": {"$eq": 2}
				}
			},
			"hd2_drinkalcohol" : {
				"ui:widget": "select"
			},
			"hd2_howmanydrinks" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_drinkalcohol": {"$in": [1, 2]}
				}
			},
			"hd2_drinkyears" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_drinkalcohol": {"$in": [1, 2]}
				}
			},
			"hd2_alcoholquitmonth" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_drinkalcohol": {"$eq": 2}
				}
			},
			"hd2_alcoholquityear" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_drinkalcohol": {"$eq": 2}
				}
			},
			"hd2_excercisedays" : {
				"ui:widget": "select"
			},
			"hd2_minutesexcercise" : {
				"ui:widget": "updown",
				"condition": {   
					"hd2_headache_causes_section.hd2_excercisedays": {"$in": [1, 2, 3, 4, 5, 6, 7]}
				}
			},
			"hd2_longregularly" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_excercisedays": {"$in": [1, 2, 3, 4, 5, 6, 7]}
				}
			},
			"hd2_history" : {
				"ui:widget": "select"
			},
			"hd2_beforeinjury" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_recentheadinjury" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_recentheadinjuryyear" : {
				"ui:widget": "text",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_headinjurythecause" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_newheadache" : {
				"ui:widget": "select",
				"condition": {   
					"$and": [
						{ 
							"hd2_headache_causes_section.hd2_history": { "$eq": 1} 
						},
						{
							"hd2_headache_causes_section.hd2_headinjurythecause": { "$eq": 1 } 
						}
					]
				}
			},
			"hd2_prevwors" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_worse" : {
				"ui:widget": "select",
				"condition": {   
					"$and": [
						{ 
							"hd2_headache_causes_section.hd2_history": { "$eq": 1} 
						},
						{
							"hd2_headache_causes_section.hd2_prevwors": { "$eq": 1 } 
						}
					]
				}
			},
			"hd2_CL" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_longCL" : {
				"ui:widget": "select",
				"condition": {   
					"$and": [
						{ 
							"hd2_headache_causes_section.hd2_history": { "$eq": 1} 
						},
						{
							"hd2_headache_causes_section.hd2_CL": { "$eq": 1 } 
						}
					]
				}
			},
			"hd2_amnesiaheadinjury" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_amnesiaperiod" : {
				"ui:widget": "select",
				"condition": {   
					"$and": [
						{ 
							"hd2_headache_causes_section.hd2_history": { "$eq": 1} 
						},
						{
							"hd2_headache_causes_section.hd2_amnesiaheadinjury": { "$eq": 1 } 
						}
					]
				}
			},
			"hd2_bfstsinjury" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			},
			"hd2_bfstsperiod" : {
				"ui:widget": "select",
				"condition": {   
					"$and": [
						{ 
							"hd2_headache_causes_section.hd2_history": { "$eq": 1} 
						},
						{
							"hd2_headache_causes_section.hd2_bfstsinjury": { "$eq": 1 } 
						}
					]
				}
			},
			"hd2_symptomsfollowingheadinjury" : {
				"ui:widget": "select",
				"condition": {   
					"hd2_headache_causes_section.hd2_history": {"$eq": 1}
				}
			}
		},
		"hd2_head_injury_symptom_section": {
			"ui:order": [
				"hd2_TBIPheadache",
				"hd2_TBIPressurehead",
				"hd2_TBIneckpain",
				"hd2_TBInausiavomiting",
				"hd2_TBIdizziness",
				"hd2_TBIblurredvision",
				"hd2_TBIbalanceproblems",
				"hd2_TBIsensitivitytolight",
				"hd2_TBIsensitivitynOSE",
				"hd2_TBIsloweddown",
				"hd2_TBIfog",
				"hd2_TBInotright",
				"hd2_TBIconcentratingdifficulty",
				"hd2_TBIdifficultyremebering",
				"hd2_TBIfatigue",
				"hd2_TBIconhd2sion",
				"hd2_TBIdrowsiness",
				"hd2_TBItroublefallasleep",
				"hd2_TBImoreemotional",
				"hd2_TBIirritability",
				"hd2_TBIsadness",
				"hd2_TBInervousanxious"
			],
			"hd2_TBIPheadache": {
				"ui:widget": "select"
			},
			"hd2_TBIPressurehead": {
				"ui:widget": "select"
			},
			"hd2_TBIneckpain": {
				"ui:widget": "select"
			},
			"hd2_TBInausiavomiting": {
				"ui:widget": "select"
			},
			"hd2_TBIdizziness": {
				"ui:widget": "select"
			},
			"hd2_TBIblurredvision": {
				"ui:widget": "select"
			},
			"hd2_TBIbalanceproblems": {
				"ui:widget": "select"
			},
			"hd2_TBIsensitivitytolight": {
				"ui:widget": "select"
			},
			"hd2_TBIsensitivitynOSE": {
				"ui:widget": "select"
			},
			"hd2_TBIsloweddown": {
				"ui:widget": "select"
			},
			"hd2_TBIfog": {
				"ui:widget": "select"
			},
			"hd2_TBInotright": {
				"ui:widget": "select"
			},
			"hd2_TBIconcentratingdifficulty": {
				"ui:widget": "select"
			},
			"hd2_TBIdifficultyremebering": {
				"ui:widget": "select"
			},
			"hd2_TBIfatigue": {
				"ui:widget": "select"
			},
			"hd2_TBIconhd2sion": {
				"ui:widget": "select"
			},
			"hd2_TBIdrowsiness": {
				"ui:widget": "select"
			},
			"hd2_TBItroublefallasleep": {
				"ui:widget": "select"
			},
			"hd2_TBImoreemotional": {
				"ui:widget": "select"
			},
			"hd2_TBIirritability": {
				"ui:widget": "select"
			},
			"hd2_TBIsadness": {
				"ui:widget": "select"
			},
			"hd2_TBInervousanxious": {
				"ui:widget": "select"
			},
			"condition": {   
				"$and": [
					{ 
						"hd2_headache_causes_section.hd2_history": { "$eq": 1} 
					},
					{
						"hd2_headache_causes_section.hd2_symptomsfollowingheadinjury": { "$eq": 1 } 
					}
				]
			}
		}
	}
}; 


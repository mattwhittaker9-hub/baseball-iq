// Baseball IQ Worker v5.3 — All 28 Sections + Timing Fix
// /generate (two-stage with situation bank), /save, /flag, badge generation

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// ── BAKED-IN RULE ENGINE (canonical source, do not edit here — edit RULE_ENGINE.md) ──
const BAKED_ENGINE = `DIAMOND IQ — CANONICAL RULE ENGINE (v5.1)
The Unabridged Bible | April 2026
Single source of truth for all Diamond IQ question generation and auditing.

UNIVERSAL DECISION ORDER (UDO)
BALL TYPE → MOMENTUM VECTOR → GAME STATE → POSITIONING → ROTATION/EXCEPTION → RELAY/CUTOFF → READ → DECISION

SECTION 1 — THE COMMUNICATION FOOD CHAIN
This hierarchy prevents "Mental Collisions" and ensures every player knows whose voice overrides their own.

Level 1A — The Catcher (Tactical Commander): Authority on home-plate plays and bunts.
Command: "CUT" or "THROUGH."
Scout's Scrutiny: The Catcher is the only player facing the whole field. Silence = Through. Their voice is the "Green Light" for the relay.

Level 1B — Middle Infield (SS/2B): Authority to KILL a play or initiate an Audible.
Command: "KILL," "HOLD," or "BACK."
Logic: Used to secure the ball immediately if a runner's mistake is read mid-sequence.

Level 2 — Center Fielder (Commander): Authority on call-offs and gap spacing.
The "Gap Drag": CF dictates the depth and horizontal spacing of LF/RF. CF aligns the relay from behind but does not dictate the relay spot—the target bag does.

Level 3 — Shortstop (Captain of the Dirt): Authority on infield call-offs and Wheel rotations.
The "Clean Relay" Read: If an OF throw is a "rainbow" or offline, the SS can call an early CUT regardless of the target base.

Level 4 — Base Targets (The Anchors): Corner IFs (1B/3B) and Middle IFs at the bags.
Duty: Provide a clear target lane for the throw.
Logic: Rotation is a trigger (movement); being a target is a responsibility (positioning).

UNIVERSAL COMMAND LAWS
The Rule of Silence: Spatial authority beats timing. A higher-level "MINE" overrides a lower-level "MINE" even if called a split-second later.
Outfield Priority: On any pop-up between the dirt and the grass, the Outfielder has priority.
CUT Law: The target player at the bag has the final word. Silence = Through. CUT = Intercept.

SECTION 2 — UNIVERSAL DECISION ORDER (UDO)
The 8-step mental processing loop. No step may be bypassed.

Step 1 — Ball Type: GB/FB/LD/Bunt + Velocity (Tank/Routine/Nubber).
Step 2 — Momentum Vector: The Pivot Cost. A 180° spin adds a 0.5-second penalty.
Step 3 — Game State: Leverage and score gap.
  The Contextual Flip: In high-leverage situations (tie game, 9th inning), Game State overrides Momentum. NOTE: T3-only variable. Must have explicit high-leverage game state declared in the scenario. Never the correct answer in a standard question.
Step 4 — Positioning: Standard/Infield In/DP Depth/No Doubles.
Step 5 — Rotation/Exception: Who is vacating? (e.g., The Wheel).
Step 6 — Relay/Cutoff: Chain of custody (Single Cut or Tandem).
Step 7 — Read: Validate. Is the catch clean? Is the runner committing?
Step 8 — Decision: Execute or Audible to the Sure Out.

SECTION 3 — GOLD RULES (APP STANDARDS)
3.1 Precision Limit: All answers must be 1–15 words.
3.2 High-IQ Error Mandate: Wrong answers must be Alternative Logic Paths: Fundamental Law Violation, Momentum Error, or Authority Failure.
3.3 Singularity of Action: Test the first 0.5 seconds of instinct. No "And then..." logic.
3.4 Mandatory Grounding: [Direct Answer] + [Logic Bridge] + [Rule Citation].
3.5 Tiering: Tier 1 (1 gate), Tier 2 (2 gates), Tier 3 (3+ gates).

SECTION 4 — BASE RULES (B1–B6)
B1 — Force Play (The Bag Law): Hunt the BAG, not the runner.
B2 — Line Drive (Step-Back Protocol): Freeze and take one hard step back toward the bag. Never full-sprint back; it kills your ability to advance if the ball is dropped.
B3 — Two Outs: Run on contact. No tagging or reading.
B4 — Fly Ball (Tag-Up Anchor): Anchored until first touch. Interacts with Section 21 (The String).
B5 — R3 Ground Ball:
  Infield Back: Go on contact (Conceded run).
  Infield In: See it through (Read past the mound).
  Bases Loaded: Automatic. B1 applies; you are forced home, the read is removed.
B6 — Extra Base Advancement (The 4-Point Quant Check):
  Exit Velocity: Hearing wood/metal contact (Hard/Soft).
  Outfielder Momentum: Charging (Pro-hop) or Backpedaling.
  Throw Strength: Cannon vs. Noodle arm.
  Relay Squareness: Are the MIFs set and square, or scrambling?

SECTION 5 — THE "UMPIRE'S EDGE" (FORCE & TIMING)
5.1 The Absolute Law (MLB 5.08a): No run scores if the 3rd out is a Force Out or the Batter-Runner is put out before reaching 1st.
5.2 The DP Mandate (R1/R3, 1 Out): 100% commitment to the Double Play. Never check R3. If the batter beats the throw, it's a "Timing Play" and the run counts.
5.3 The Reverse Force Hazard: If 1B touches the bag first, the force on R1 is removed. The Pro Play: Throw to 2nd first (3-6-1) to keep the force alive.
5.4 The Fourth Out Insurance: Defense can appeal a missed base to replace a previous 3rd-out tag play, potentially erasing a run.

SECTION 6 — INFIELD ALIGNMENTS
These are the pre-pitch positioning "gates." If Step 4 of the UDO is wrong, the play is dead before the crack of the bat.

6.1 Standard (Straight Up): 4–5 steps behind the baseline. No range sacrifice.
6.2 DP Depth (3x3 Rule): SS/2B move 3 steps toward the bag and 3 steps toward the plate. Shortens the pivot "clock."
6.3 Infield In (Plate Protection): Feet on the grass. 100% commitment to the plate. Soft liners/bloops become the primary liability.
6.4 No Doubles: Corners 2 steps off the line and 3–5 steps behind the bag. Prevents the "down the line" extra-base hit.
6.5 Middle Pinch: SS/2B pinch toward 2nd base. Kills the momentum of R2's secondary lead.
6.6 Corners In (Bunt Guard / Half-In): 1B and 3B even with or in front of the bag.
  The Half-In Trap: Corners In + Middle Infield at DP Depth. If hit to the corners, go home. If hit to the middle, take the "Sure Out" at 1st or 2nd.

SECTION 7 — OUTFIELD ALIGNMENTS & PHYSICS
7.1 Ball Physics (Hook vs. Slice):
  The Hook (Pull Side): High velocity, curves sharply foul.
  The Slice (Opposite Side): Faded contact, drifts foul and "hangs." Scout's Scrutiny: The Slice is the "optical illusion" of the outfield; it stays in the air 0.5s longer than a hook.
7.2 Momentum & Catch Dynamics:
  Pro-Hop (Moving In): Adds 5–7 mph to the throw. Runner success rate -20%.
  Backpedal (Moving Out): Requires "Stop and Pop"—kills arm power. Runner success rate +20%.
7.3 The 3/5 Wind Rule:
  Wind In: Move 3 steps IN.
  Wind Out: Move 5 steps BACK.
  Logic: You can always run in on a ball, but you cannot outrun a ball that has already cleared your head. The 5-step "Insurance" prevents the triple.
7.4 Surface Physics (The Turf Turn): For the tournament circuit (Great Park/Travel Ball), artificial turf is a variable. Infielders play 2–3 steps deeper because exit velocity is maintained longer. Outfielders play the "Big Hop" instead of the "Short Hop" to avoid skidding errors.

SECTION 8 — CUTOFF ASSIGNMENTS (SINGLE CUT)
LF → Home: Cutoff = 3B | Commander = Catcher
LF → 3rd: Cutoff = SS | Commander = 3B
CF → Home: Cutoff = 1B | Commander = Catcher
CF → 3rd: Cutoff = SS | Commander = 3B
RF → Home: Cutoff = 1B | Commander = Catcher
RF → 3rd: Cutoff = 2B | Commander = 3B

8.1 The Right Side Rule: On any ball to the right of 2nd base (RF/RCF), SS covers the bag and 2B acts as the cutoff.
8.2 Throw-Through Physics: Fielder never throws "to the bag." Throw through the cutoff man's chest.

SECTION 9 — TANDEM RELAYS (DOUBLE CUT)
RF/RCF Wall: Lead Relay = 2B | Trailing Relay = SS | 2B Bag Coverage = 1B rotates
LF/LCF Wall: Lead Relay = SS | Trailing Relay = 2B | 2B Bag Coverage = 1B rotates

9.1 The 1B Anchor Rule: On deep gap/wall hits, 1B abandons 1st to cover 2nd base.
9.2 The Window: Lead and Trail relays must be 15–20 feet apart.
9.3 Blind Trust: Trailing Relay is the Boss (calls the base); Lead Relay is the Hands (executes the pivot).

SECTION 10 — THE BUNT MATRIX
R1 Only: 1B=Charge | 3B=Charge | SS=Cover 2nd | 2B=Cover 1st | P=Field Middle
R2 Only: 1B=Charge | 3B=STAY HOME | SS=Shadow 2nd | 2B=Cover 1st | P=Field 3B Line
R1+R2 (Wheel): 1B=Crash (Wheel) | 3B=Crash (Wheel) | SS=Cover 3rd | 2B=Cover 1st | P=Field Middle
Squeeze (R3): 1B=Crash | 3B=Crash | SS=Cover 3rd | 2B=Cover 1st | P=Plate Coverage

10.1 The R2 Cardinal Rule: 3B STAYS HOME. Vacating 3rd with only R2 on base is a "System Failure."
10.2 Squeeze Backside Rule: SS rotates to cover 3rd Base (not 2nd). Since 3B is crashing home, SS must be the target at 3rd for any rundown throw.
10.3 Bunt-Spin Penalty: If a 180° spin is required for the lead out, audible to the Sure Out at 1st.

SECTION 11 — 1ST & 3RD DEFENSIVE SYSTEM
All 1st & 3rd defensive scenarios are Tag Plays. Because the batter has not put the ball in play, no runners are forced to advance.

THE THROUGH: Catcher fires 100% to 2nd for the TAG. Authority = Catcher.
THE CUT: Catcher fires to 2nd; SS/2B cuts at the Grass Line. Authority = Catcher.
THE SNAP: Catcher fakes 2nd, fires to 3rd for the TAG. Authority = Catcher.
THE DISENGAGE: Pitcher steps off back of rubber; kills all momentum. Authority = Pitcher.

11.1 Grass Line Geometry: The infielder cuts the ball 10–12 feet in front of the bag, not at the mound.
11.2 The "Steal" Tag Rule: Scout's Scrutiny: In any steal attempt, the fielder must tag the runner, not just touch the bag. This is a common Tier 1 logic error in youth ball.
11.3 Tactical Triggers: If R3 is the winning/tying run, THE THROUGH is a tactical failure. Challenge R3 with THE CUT or THE SNAP.

SECTION 12 — DROPPED THIRD STRIKE (THE LANE RULE)
Governed by MLB Rule 5.05a. This is a Force Out at 1st base.

12.1 Legal Triggers: Uncaught strike three is live ONLY if:
  1. 1st base is unoccupied.
  2. OR there are 2 outs (even if 1B is occupied).
12.2 The Lane Rule Physics:
  Fair Territory Catch: Catcher steps Inside (toward mound); 1B takes the Inside Corner.
  Foul Territory Catch: Catcher steps Outside (toward dugout); 1B takes the Outside Corner.
12.3 The "Glove-Tag" Audible: If the ball is at the catcher's feet, tag the batter. This removes the risk of an errant throw or a runner-lane interference call.

SECTION 13 — INFIELD FLY RULE (IFR)
The "Ordinary Effort" rule (MLB 5.09).

13.1 Mandatory Conditions: 1. R1/R2 (or Loaded); 2. < 2 outs; 3. Fair fly catchable with "Ordinary Effort."
13.2 Force Removal: Once IFR is called, the batter is out and the force is removed. Runners advance at their own risk.
13.3 The "Ghost" Rule:
  On the Bag: If the ball hits a runner standing on the bag, the runner is SAFE.
  Off the Bag: If it hits them while off the bag, they are OUT.
  Scout's Scrutiny: This is the only play in baseball where the bag is a "Safe Haven" from a batted ball.

SECTION 14 — THE 3-FOOT RUNNER LANE
The "Last 45 Feet" rule for throws from behind the runner.

14.1 Geometry: A 3-foot wide box in foul territory starting 45 feet from 1st base.
14.2 The Quality Throw Test: A runner is only out if they are out of the lane AND they interfere with a "Quality Throw."
  Scout's Scrutiny: If the catcher throws the ball into the stands, the runner is safe regardless of where they were running. The defense cannot be rewarded for a non-competitive throw.
14.3 Ball in the Back: If the runner is in fair territory and hit by a catchable throw, the ball is dead and the runner is OUT.

SECTION 15 — RUNDOWN PROTOCOL (THE PICKLE)
15.1 One-Throw Mandate: Sprint at 100%. Max one throw.
15.2 Dart Throw (Mechanical Priority): Hold the ball out of the glove at ear-height throughout the chase. No wind-up.
  Logic: This visual cue allows the receiver to "time" their break into the lane.
15.3 The Peel-Off (MLB 6.01h): After releasing the ball, the fielder must exit the baseline toward Fair Territory immediately.
15.4 The Push: Always drive the runner back toward their original base (the "Safe" base).

SECTION 16 — PITCHER FIELDING & BACKUPS
A pitcher is the 5th infielder. Their movement after release is the "Safety" for the rest of the defense.

16.1 The 3-1 Coverage (The J-Path):
  The Trigger: Any ball hit to the right of the Pitcher's mound.
  The SOP: Sprint on contact toward the foul line. Receive ball before the bag. Touch the inside corner with the right foot.
  The Handoff Read: If the 1B stays home and fields the ball, the Pitcher becomes the backup. If the 1B ranges toward the ball, the Pitcher completes the J-Path to anchor the bag.
  Scout's Scrutiny: Better to be there and not be needed than to be needed and not be there. Sprint until the 1B waves you off or the out is recorded.
16.2 Shadowing (The 30-Foot Buffer): Stay 30–45 feet behind the target bag to account for the "bounce" of an overthrow. Shadow Home on all OF throws; shadow 3rd on deep RF/CF throws.
16.3 WP/PB: The "Arc Move":
  With R3: Sprint directly to home plate.
  With R2 Only: Move to a "Control Point" halfway between mound and home.
  Scout's Scrutiny (The Orange County Burner): Don't be a statue. The Arc Move keeps your feet moving so you can finish the sprint to the plate if R2 rounds 3rd, or rotate to back up the throw to 3rd if they anchor.
16.4 Comebacker Matrix:
  Bases Loaded: Throw Home (Force Out).
  R1 Only: Start the 1-6-3 DP.
  R1/R2 (Tie Game): Throw to 3rd (Lead Force). The Inning Killer: The 1-5-3 DP (P-to-3B-to-1B) is the high-IQ play to end the threat.

SECTION 17 — PITCHER PICKOFF MECHANICS
17.1 The Complete Stop: Discernible pause with hands together and shoulders settled. Rolling stop = automatic balk.
17.2 LHP 45-Degree Rule: Lead foot must cross the 45° plane toward 1st.
17.3 2B Pickoff Dynamics: Daylight Rule (timing) or Inside Move (spin).
17.4 Disengagement Limit (2026 Law): Max two disengagements per plate appearance. A third attempt that fails to record an out is a balk.
  Scout's Scrutiny (The 3-1 Count Gamble): While not an absolute law, throwing over on a 3-1 count is generally low-IQ. In a high-walk-probability count, the pitcher's rhythm and focus should be 100% on the strike zone. Only gamble here against an elite "base-thief" in a high-leverage inning.

SECTION 18 — APPEAL PLAYS & THE FOURTH OUT
18.1 Legal Appeal Procedure (MLB 5.09c): 1. Ball must be Live; 2. Pitcher must step off the back of the rubber; 3. Throw to the base; 4. State the appeal.
18.2 The Fourth Out Insurance: Appeal a missed base to replace a previous 3rd out. This can negate a run that scored on a timing play.
18.3 Tag-Up Appeal (The First Touch): A runner is safe if they leave the moment the ball is first touched, even if it isn't secured for several seconds.

SECTION 19 — WEATHER & FIELD CONDITIONS
These are Tier 3 (Tactician) Environmental Variables.

19.1 Sun Shield & Lost Protocol: Glove web shield. If lost, arms up + scream "SUN!" CF (Level 2) takes over.
19.2 The 3/5 Wind Rule: Wind In = 3 steps IN. Wind Out = 5 steps BACK.
19.3 Surface Physics: Wet Outfield No-Dive Law. Hydroplaning risk is too high. Stay on your feet and stay behind the ball.
19.4 Temperature & Density: Cold (<60°F) air is heavy; ball dies. Hot (>85°F) air is thin; ball carries.
  Scout's Scrutiny: In the app, these variables should dictate depth adjustments. If it's 90° at the Great Park, the "No Doubles" depth (Section 6.4) must move back an additional 5 feet.

SECTION 20 — PITCH & HITTER IQ
20.1 Pitch Tunneling (20-Foot Rule): All pitches must travel through the same "window" for the first 20–25 feet to force an early commitment from the hitter.
20.2 Secondary Scaling:
  The Shuffle: A side-step movement taken by the runner during the pitcher's delivery to gain momentum for an advance.
  Tight Game: 3 Shuffles (Aggressive).
  Blowout (5+ Lead): 2 Shuffles (Safe/Stationary).
20.3 The 0-2 Waste Pitch: Aim 2–3 inches off the plate. A "meatball" on 0-2 is a mental error.
  Scout's Scrutiny (The Foul-Off Reset): Repeating the same pitch/location after a foul ball is a high-risk gamble. The foul proves the hitter has timed the velocity. Reset their clock by changing the speed or the eye level.

SECTION 21 — TAG-UP CALCULUS
Tagging up is a situational calculation of Distance vs. Arm vs. Speed.

21.1 Shallow Read (Extending the String): On shallow fly balls (LF or Short CF), the throw is statistically too short to beat.
  The Action: Walk off toward home (the Recovery Lead) to play for the drop. If caught, you have enough "string" to return safely.
  Scout's Scrutiny: Standing on the bag on a shallow fly is "Passive Play." Extending the string is "Aggressive-Passive"—you score the second the ball hits the grass.
21.2 Deep Read (Anchoring): On deep fly balls (RF or Deep CF), the distance (250ft+) favors the runner's linear speed over the outfielder's arm.
  The Action: Stay anchored until the ball is first touched.
21.3 Momentum Variable:
  The Heavy Throw: Fielder is charging/pro-hopping toward the plate. Stay.
  The Light Throw: Fielder is backpedaling or turned away. Go.
21.4 Foul Ball Read: Generally, stay on foul fly balls. Only challenge if the catcher/infielder is deep in the dugout or bullpen with their back completely turned.
21.5 Footwork (The Push-Off):
  LF Line/Corner: Use the Right Foot on the bag. This keeps the body open to the field so the runner can see the catch over their left shoulder without twisting.
  All Other Locations: Use the Left Foot as the push-off (standard track-start posture).

SECTION 22 — UNIVERSAL BASEBALL LAWS
22.1 Chalk Law: Any ball touching the foul lines or the base is FAIR.
  The Rolling Rule: A ball that hits foul dirt but rolls fair before passing 1st or 3rd is Fair. Conversely, a ball that is fair but rolls foul before passing 1st or 3rd is Foul.
22.2 The Overrun (The "Attempt" Law):
  The Law: Turning toward 2nd base after overrunning 1st does not make you "live." The legal trigger is the Attempt to advance.
  Scout's Scrutiny: Return with Neutral Shoulders (facing the mound). Any stutter-step, shoulder-pop, or lean toward 2nd will be ruled an "Attempt" by the umpire, making you liable to be tagged out.
22.3 Dual Occupation (Two Runners, One Base):
  Standard: Lead runner is entitled to the bag; trailing runner is OUT if tagged.
  The Force Exception: If the lead runner is Forced to advance, they lose the right to their original bag. In this case, the lead runner is OUT if tagged.

SECTION 23 — OVERTHROW AWARDS
Awards are triggered the moment a ball goes into "Dead Ball" territory (stands/dugout).

23.1 Fielder Standard: Award is two bases from the runner's position at the Time of Release (TOR).
23.2 Pitcher on Rubber: Award is one base from the Time of Pitch (TOP).
  Logic: Penalizes a wild pitch or engaged pickoff less severely.
23.3 Infield First Play Exception (MLB 5.06b4G): If the overthrow is the first play by an infielder, the award is two bases from the Time of Pitch (TOP), not release.
23.4 Step-Off Transformation: Once a pitcher disengages (steps off), they are legally a Fielder. Any overthrow becomes a two-base award from TOR.

SECTION 24 — THE 7-MAN ROTATION (SOP)
The "Handoff" system ensuring no base is ever left empty.

24.1 The Opposite Bag Rule: On any ball hit to the outfield, if one middle infielder (SS or 2B) moves toward the ball as a relay/cutoff, the other must rotate to anchor the bag.
24.2 The 1B Anchor Rule: On deep gap/wall hits, the 1st Baseman abandons 1st to cover 2nd base, as both MIFs are out in the tandem relay (Section 9).
24.3 Pitcher Shadowing Formula (The Default):
  No Runners: Shadow 2nd.
  Runner on 1st: Shadow 3rd.
  Runner on 2nd or 3rd: Shadow Home Plate.
24.4 Reactive Shadowing (The Move):
  Scout's Scrutiny (The 24.3 vs 16.2 Reconciliation): Section 24.3 defines the Pre-Pitch Target (the bag you are likely to back up). Section 16.2 defines the Active Movement once the ball is in flight.
  Example: With R1, the pitcher defaults toward 3rd (24.3). If the ball is hit to RF, the pitcher reacts to shadow 3rd (16.2). If the ball is hit to LF, the pitcher reacts to shadow Home Plate to support the primary scoring threat.
24.5 Authority Hierarchy: The Catcher directs all throws home. The Anchor (SS/2B) directs all other throws.
  The Command: "FOUR-FOUR!" (Home) or "CUT-TWO!" (Intercept and throw to 2nd).

SECTION 25 — THE SLIDE RULE (SAFETY)
25.1 Bona Fide Slide: Must begin before the bag, reach the bag, and stay on the bag.
25.2 The Double Penalty: Sliding past the bag or veering to hit a fielder on a force play = Runner is OUT + Batter-Runner is OUT.

SECTION 26 — THE BASE PATH (3-FOOT RULE)
26.1 Establishment: The base path is an invisible line created the moment a tag is attempted.
26.2 Deviation: A runner is out if they move more than 3 feet away from their direct line to avoid a tag.
26.3 No Tag: If no tag is being attempted, a runner can be anywhere (e.g., rounding wide into the grass).

SECTION 27 — INTERFERENCE & OBSTRUCTION
27.1 Catcher's Interference: Bat hits glove. Award 1st base.
27.2 Batter's Interference: Batter hinders catcher's throw on a steal. Result: Runner is OUT.
27.3 Obstruction: Fielder without the ball hinders a runner's path. Award base beyond.


SECTION 28 — OUTFIELDER BACKUP ASSIGNMENTS
Geography drives backup responsibility. Each outfielder backs up the base directly in their line.

28.1 Base Backup by Position:
- LF: Backs up 3rd base. Wild throws to 3rd can skip into left field territory.
- CF: Backs up 2nd base. Wild throws to 2nd go straight to center field.
- RF: Backs up 1st base. Wild throws to 1st skip into right field territory.

28.2 Pickoff Backup:
- Catcher pickoff to 2nd: CF backs up 2nd.
- Catcher pickoff to 3rd: LF backs up 3rd.
- Pitcher pickoff to 1st: RF backs up 1st.

28.3 Outfielder Mutual Backup:
- On all batted balls, the two non-fielding outfielders back up the fielder making the play.
- LF and RF shade toward CF on CF plays. CF shades toward the ball-side outfielder on corner plays.

28.4 Nuance Note:
Backup depth and angle adjust based on runner position, throw strength, and game situation.
These are foundation assignments — situational reads layer on top.

Version 5.2 | Sections 1–11, 15–17, 21, 23, 25–28 | Project Lead: Whittaker
SECTION 28 — OUTFIELDER BACKUP ASSIGNMENTS
Geography drives backup responsibility. Each outfielder backs up the base directly in their line.

28.1 Base Backup by Position:
- LF: Backs up 3rd base. Wild throws to 3rd can skip into left field territory.
- CF: Backs up 2nd base. Wild throws to 2nd go straight to center field.
- RF: Backs up 1st base. Wild throws to 1st skip into right field territory.

28.2 Pickoff Backup:
- Catcher pickoff to 2nd: CF backs up 2nd.
- Catcher pickoff to 3rd: LF backs up 3rd.
- Pitcher pickoff to 1st: RF backs up 1st.

28.3 Outfielder Mutual Backup:
- On all batted balls, the two non-fielding outfielders back up the fielder making the play.
- LF and RF shade toward CF on CF plays. CF shades toward the ball-side outfielder on corner plays.

28.4 Nuance Note:
Backup depth and angle adjust based on runner position, throw strength, and game situation.
These are foundation assignments — situational reads layer on top.


Last Update: April 2026`;
const BAKED_GOLDEN = `# DIAMOND IQ — GOLDEN RULES BY POSITION & CATEGORY
### Position-Specific Concept Library | April 2026
Source: Session 8 Handoff Doc + 40-Category Decision Points Table
Used by the Question Generator to map positions to valid scenario concepts.

---

## UNIVERSAL CATEGORIES (All Positions)

| Category | Key Concepts |
|----------|-------------|
| GR1 | Baserunner apex read, extend LF, tag RF, hitter happy zone, two-strike, score R3 |
| GR2 | Two-out burner — go on contact |
| GR3 | Force no read, run through first, force vs tag |
| GR8 | Scoreboard awareness, never make first/third out at third, throw quality reads |
| Tactician's Third | Never make 1st or 3rd out of inning at third base |
| Obstruction and Interference | Fielder without ball in baseline = obstruction; runner hinders fielder = interference |
| Passed Ball vs Wild Pitch | PB = catchable with ordinary effort; WP = uncatchable location |

---

## PITCHER

**Primary Sections:** S16 (Fielding & Backups), S17 (Pickoff Mechanics), S10 (Bunt Matrix — P role), S4 (Base Rules), S5 (Force & Timing)

| Category | Key Concepts |
|----------|-------------|
| GR4 | Slide step, vary looks, pitch read, cheat runner, hold runner |
| GR5 | Comebackers, slow rollers, DP pivot, scoop in dirt, foul pops, no-doubles |
| GR6 | Cover first on bunt, backup home/third, cutoff communication, relay routes |
| Pitch Sequencing | Tunnel rule; never same location after foul; high heat sets up low curve; 0-2 waste, 1-2 chase |
| Pitcher Holding Runners | Discernible pause (shoulders settle); vary 0.5–3.0s; inside move to 2B; no quick pitch |
| Pitchout Mechanics | Fastball-plus to standing target; catcher moves on downward phase only |
| Pickoff Moves | RHP: foot toward 1B; LHP: entire foot must cross 45° line; 2B daylight; 2B timing play; no-go on 3-ball count |
| Squeeze Defense | Suicide: pitch high + tight; Safety: 3B holds until bunt confirmed; Pitcher: never balk — deliver to backstop if needed |
| Bunt Matrix — Pitcher Role | R1=Field Middle; R2=Field 3B Line; R1+R2=Field Middle; Squeeze=Plate Coverage |
| Comebacker Matrix | Bases Loaded=Home; R1 Only=1-6-3 DP; R1/R2 Tie Game=3rd Lead Force |
| Arc Move (WP/PB) | R3=Sprint home; R2 Only=Control Point halfway, read the Burner |
| J-Path (3-1 Coverage) | Trigger=any ball right of mound; Sprint foul line; Handoff Read: 1B stays=backup, 1B ranges=anchor bag |
| Shadowing | 30–45ft behind bag; Home on all OF throws; 3rd on deep RF/CF only |

---

## CATCHER

**Primary Sections:** S11 (1st & 3rd Defense), S12 (Dropped 3rd Strike), S1 Level 1A (Tactical Commander)

| Category | Key Concepts |
|----------|-------------|
| Catcher Framing | Soft wrist stick; square shoulders on blocks; In-Out-Up-Down game calling |
| First and Third Defense | Manager sets call, catcher audits live — if R3 has winning jump, cut or fake regardless of pre-set call |
| Dropped Third Strike | Lane by ball location (fair=inside, foul=outside); only applies when 1B open OR 2 outs |
| LHH Foul Pop | Catcher turns toward 3B side, over-pursues, backspin brings it back |
| Communication Authority | Level 1A: CUT or THROUGH on all throws home; directs bunt defense |
| 1st & 3rd Plays | THE THROUGH, THE CUT, THE SNAP, THE DISENGAGE — all tag plays, no force outs |
| Steal Tag Rule | Any steal attempt = tag play. Fielder must tag runner, not just touch bag |

---

## FIRST BASEMAN

**Primary Sections:** S8 (Cutoffs — CF/RF home), S9 (Tandem Relays — 1B Anchor), S10 (Bunt Matrix), S16.1 (J-Path receiver)

| Category | Key Concepts |
|----------|-------------|
| Cutoff — CF/RF to Home | 1B is the cutoff on all CF and RF throws home |
| Tandem Relay Anchor | On deep gap/wall hits, 1B abandons 1st to cover 2nd base |
| Bunt Coverage | R1/R2/Squeeze: Cover 1st base |
| J-Path Receiver | Receive pitcher at inside corner; touch bag before pitcher arrives |
| Force vs Tag | Use the bag on force plays, not the glove |
| Double Play Routes | 3-6-3: feed to SS covering 2nd, return to 1B |
| Reverse Force Hazard | If 1B touches bag first, force on R1 is removed. Pro Play: throw to 2nd first (3-6-1) |

---

## SECOND BASEMAN

**Primary Sections:** S8 (Cutoffs — RF to 3rd), S9 (Tandem Relays), S10 (Bunt Matrix), S24 (Opposite Bag Rule)

| Category | Key Concepts |
|----------|-------------|
| Cutoff — RF to 3rd | 2B is the cutoff on RF throws to third |
| Right Side Rule | RF/RCF ball: SS covers bag, 2B acts as cutoff |
| Tandem Relay — RF/RCF Wall | 2B = Lead Relay (Hands); SS = Trailing Relay (Boss) |
| Tandem Relay — LF/LCF Wall | 2B = Trailing Relay (Boss); SS = Lead Relay (Hands) |
| Bunt Coverage | All configs: Cover 1st base |
| Opposite Bag Rule | If 2B goes to cutoff, SS anchors second. If SS goes to cutoff, 2B anchors second |
| Double Play Routes | 4-6-3: feed to chest of SS; 6-4-3: receive feed outside bag |
| Hit and Run Coverage | SS or 2B covers 2nd on steal; catcher stands |

---

## SHORTSTOP

**Primary Sections:** S1 Level 3 (Captain of Dirt), S8 (Cutoffs — LF/CF to 3rd), S9 (Tandem Relays), S10 (Bunt Matrix), S24 (7-Man Rotation)

| Category | Key Concepts |
|----------|-------------|
| Cutoff — LF to 3rd | SS is the cutoff on LF throws to third |
| Cutoff — CF to 3rd | SS is the cutoff on CF throws to third |
| Tandem Relay — LF/LCF Wall | SS = Lead Relay (Hands); 2B = Trailing Relay (Boss) |
| Tandem Relay — RF/RCF Wall | SS = Trailing Relay (Boss); 2B = Lead Relay (Hands) |
| Bunt Matrix | R1=Cover 2nd; R2=Shadow 2nd; R1+R2 Wheel=Cover 3rd; Squeeze=Cover 3rd |
| Squeeze Backside Rule | SS covers 3rd (not 2nd) — 3B crashes home, SS is the backside target |
| KILL Command | Level 1B authority: calls KILL/HOLD/BACK on mid-sequence runner mistakes |
| Clean Relay Read | SS calls early CUT when SS is in the relay lane and throw is rainbow/offline |
| Opposite Bag Rule | SS anchors second when 2B goes to cutoff on right side balls |
| 7-Man Rotation | Opposite Bag: one MIF goes to relay, other anchors the bag |
| Double Play Routes | 6-4-3: feed outside bag; 4-6-3: receive feed at chest |

---

## THIRD BASEMAN

**Primary Sections:** S8 (Cutoffs — LF/CF/RF to 3rd — Commander), S10 (Bunt Matrix), S11 (1st & 3rd)

| Category | Key Concepts |
|----------|-------------|
| CUT Law — LF to 3rd | 3B is the Commander on LF throws to third. Calls CUT or THROUGH |
| CUT Law — CF to 3rd | 3B is the Commander on CF throws to third |
| CUT Law — RF to 3rd | 3B is the Commander on RF throws to third |
| Cutoff — LF to Home | 3B is the cutoff on LF throws home |
| Bunt Matrix — R1 | Charge |
| Bunt Matrix — R2 | STAY HOME — Cardinal Rule, never vacate 3rd |
| Bunt Matrix — Wheel | Crash (Wheel) |
| Bunt Matrix — Squeeze | Crash home |
| Hot Corner Reads | Read the slash — don't crash if batter fakes bunt and pulls back to hack |
| 1st & 3rd | Provides target at 3rd bag |

---

## LEFT FIELDER

**Primary Sections:** S7 (Ball Physics), S8 (Cutoffs — LF throws), S21 (Tag-Up Calculus)

| Category | Key Concepts |
|----------|-------------|
| Cutoff Assignment — Home | LF throw home: cutoff = 3B, commander = Catcher |
| Cutoff Assignment — 3rd | LF throw to 3rd: cutoff = SS, commander = 3B |
| Tandem Relay | LF/LCF wall: SS = Lead, 2B = Trailer |
| Ball Physics — Slice | Opposite field contact drifts foul and hangs 0.5s longer than hook |
| Tag-Up — Shallow | Walk off toward home (Recovery Lead) to play for the drop |
| Tag-Up — Deep | Anchor until first touch |
| Momentum Variable | Pro-hop = Heavy throw (Stay); Backpedal = Light throw (Go) |
| Foul Ball Read | Stay on foul flies unless fielder is deep in dugout with back turned |
| Footwork | LF Line/Corner: right foot on bag for push-off |
| Sun Protocol | Glove web shield; if lost — arms up, scream SUN, CF takes over |

---

## CENTER FIELDER

**Primary Sections:** S1 Level 2 (General of Grass), S7 (Ball Physics), S8 (Cutoffs — CF throws), S9 (Tandem Relays), S21 (Tag-Up)

| Category | Key Concepts |
|----------|-------------|
| Cutoff Assignment — Home | CF throw home: cutoff = 1B, commander = Catcher |
| Cutoff Assignment — 3rd | CF throw to 3rd: cutoff = SS, commander = 3B |
| Tandem Relay — RF/RCF | 2B = Lead, SS = Trailer |
| Tandem Relay — LF/LCF | SS = Lead, 2B = Trailer |
| Gap Drag Authority | CF dictates depth and horizontal spacing of LF/RF |
| Call-Off Authority | Level 2: absolute authority on all outfield call-offs |
| Ball Physics — Hook | Pull side contact curves sharply foul |
| Ball Physics — Slice | Opposite field hangs 0.5s longer |
| Tag-Up Calculus | Deep fly = anchor; Shallow = Recovery Lead |
| Wind Rule | Wind In = 3 steps IN; Wind Out = 5 steps BACK |
| Sun Protocol | Takes over when LF/RF loses the ball in sun |

---

## RIGHT FIELDER

**Primary Sections:** S7 (Ball Physics), S8 (Cutoffs — RF throws), S21 (Tag-Up)

| Category | Key Concepts |
|----------|-------------|
| Cutoff Assignment — Home | RF throw home: cutoff = 1B, commander = Catcher |
| Cutoff Assignment — 3rd | RF throw to 3rd: cutoff = 2B, commander = 3B |
| Tandem Relay — RF/RCF Wall | 2B = Lead Relay, SS = Trailing Relay |
| RF Anomaly | Regular depth R2→3rd tag-up = 45% success rate |
| Ball Physics — Hook | RHH pull contact hooks toward RF foul line |
| Momentum Variable | Pro-hop = Heavy throw; Backpedal = Light throw |
| Tag-Up — Deep | Anchor until first touch |
| Tag-Up — Footwork | Left foot on bag for push-off (standard) |
| 9-3 Special | Gun a slow runner at first on a sharp single |

---

## BASERUNNER

**Primary Sections:** S4 (Base Rules B1–B6), S21 (Tag-Up Calculus), S22 (Universal Laws)

| Category | Key Concepts |
|----------|-------------|
| GR1 | Apex read, extend LF, tag RF, two-strike adjustment, score R3 |
| GR2 | Two-out burner — go on contact, no tagging |
| GR3 | Force no read, run through first, force vs tag |
| Secondary Lead Timing | Front foot landing is trigger; 2 hard shuffles; 2-out = extend; margin <3 = 3 shuffles; margin >5 = 2 shuffles |
| R1 Fly Ball Reads | Shallow=hold; deep/gap=halfway; wall=tag if fielder backpedaling; 2 outs=gone |
| Tag-Up Matrix | RF anomaly; LF dead zone; R1→2nd only on deep fly with fielder running away |
| Tagging Up | Double tag: R3 dictates, R2 only goes if throw committed home |
| Line Drive Freeze | Freeze + step back; gap=halfway; 2 outs=gone on contact |
| Hit and Run | Runner goes on first move, no peeking; freight train through 2nd on grounder |
| Overrun Law | Legal trigger = Attempt to advance, not direction of turn |
| Dual Occupation | Lead runner entitled to bag; trailing runner out if tagged |
| Chalk Law | Ball touching foul line or base = FAIR |
| Slide Rule | Bona fide slide: begin before bag, reach bag, stay on bag |

---

## HITTER

**Primary Sections:** S20 (Pitch & Hitter IQ), S4 B3 (Two Outs)

| Category | Key Concepts |
|----------|-------------|
| Pitch Sequencing | Tunnel rule; never same location after foul; high heat sets up low curve |
| Two-Strike Adjustment | Expand zone slightly; protect the plate; contact over power |
| 0-2 Waste Pitch | Expect the waste pitch 2–3 inches off; don't chase |
| Happy Zone | Pitch in hitter's happy zone = danger; pitchers avoid middle-middle |
| Hit and Run | Protect the runner; swing at anything to make contact |
| Secondary Scaling | Tight game = 3 shuffles; blowout = 2 shuffles |

---

Version 1.0 | 12 Positions | 40 Categories | Project Lead: Whittaker
Last Update: April 2026`;
const BAKED_VOICE  = `# DIAMOND IQ — BASEBALL VOICE STANDARD
The Standard for All Question Generation

---

## THE STANDARD

Sound like a veteran player talking to a teammate in the dugout. Not a coach reading a manual. Not a textbook. Someone who's been in the game 15 years and says exactly what needs to be said — no more.

---

## THE RULES

- Short sentences. Present tense. Direct.
- 2–3 sentences max on explanations. Never more.
- No bullet points, no numbered steps in explanations.
- Don't start every sentence with "You."
- Use baseball language naturally — don't force slang.
- Keep the correct rule and answer — just change the voice.
- If it's already tight and conversational, only polish slightly.

---

## BANNED PHRASES

Never use:
- "This protects you"
- "Communication is key"
- "The technique exists exactly for"
- "It is important to"
- "Always remember"
- "Better to be safe than sorry"
- "Generally speaking"
- "In most cases"
- "What is the correct play"
- "In this situation"

---

## QUESTION STEM VOICE

BAD: "In a situation where there is a runner on second base with no outs and the batter hits a fly ball to the outfield, what should the runner do?"
GOOD: "Runner on second, nobody out. Fly ball to left field. What do you do?"

BAD: "What is the correct play in this situation?"
GOOD: "Ball's in the air — you're on second. What do you do?"

The question stem sets the scene in one sentence. The question follows immediately. No re-explaining.

---

## EXPLANATION VOICE

BAD: "Pop time measures from catch to second base. A short exchange — catching and transferring at the ear in one clean motion — is what makes pop time elite. Any extra movement adds to that clock."
GOOD: "Pop time is catch to second. Keep the transfer clean — ear height, one motion. Every extra move is time you don't have."

BAD: "Always call the ball loudly in foul territory and get your glove between the ball and any obstacles like fences or stands. This protects you from injury and gives you the best chance to make the catch safely."
GOOD: "Call it early, know where the wall is, and go get it. Everything else takes care of itself."

BAD: "Standard depth requires a read. Stay anchored until the ball passes the pitcher's mound — if it gets through, go. If the fielder is squared up on a hard-hit ball, hold."
GOOD: "Standard depth means you read it. Watch the ball through the mound — if it's past the fielder, go. If he's squared up clean, you hold."

BAD: "A comebacker with a runner on third requires you to check the runner before making your throw. This is because the runner may have broken for home on contact."
GOOD: "Comebacker, R3 — read the runner first. If he broke, fire home. If he held, take first. Don't skip the read."

---

## ANSWER CHOICE VOICE

Choices are punchy. The explanation does the teaching, not the label.

BAD: "The third baseman — he is the cutoff on LF throws home because he is positioned between left field and home plate"
GOOD: "Your third baseman — he's your cutoff"

---

## WRONG ANSWER VOICE

Wrong answers must be real baseball mistakes — never passive, never obviously stupid.

BAD wrong answer: "Run to the dugout"
GOOD wrong answer: "Break for third before the catch"

BAD wrong answer: "Ask the umpire"
GOOD wrong answer: "Check third then take first for the sure out"

BAD wrong answer: "Stay at second and wait"
GOOD wrong answer: "Hold at second — the throw has him beat"

Wrong answers must be active. A passive wrong answer sounds fake. An active wrong answer sounds like a real mistake a player actually makes.

---

## BASEBALL TERMINOLOGY

Use these naturally when the situation calls for them:
"The house," "the rock," "the dish," "frozen rope," "seed," "noodle arm," "cannon," "the hole," "the chalk," "the gap," "stringing his lead," "crash," "fire," "gun him"

Don't force slang. If the natural language is cleaner, use it.

---

## THE TEST

Read it out loud. If it sounds like something a coach would write on a whiteboard, rewrite it. If it sounds like something a veteran would say while spitting sunflower seeds in the dugout, it passes.

---

Version 1.0 | Project Lead: Whittaker
Last Update: April 2026`;
const BAKED_RULES  = BAKED_ENGINE + '\n\n' + BAKED_GOLDEN;

const SB_URL = 'https://kcisieenoznaorioagqq.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaXNpZWVub3puYW9yaW9hZ3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MzI2MTQsImV4cCI6MjA5MDIwODYxNH0.yGa1Mc9N1X1tmnQvVy7arTQSZT8w0YJn_wNNEW0mQDg';

const BADGE_PROMPTS = {
  ozzie:{name:'The Wizard',prompt:'Epic baseball trading card art of a shortstop player in a dramatic mid-air backflip dive catching a baseball, stadium lights, dark navy and gold, cinematic lighting, hexagonal badge frame reading THE WIZARD'},
  bench:{name:'Johnny Bench',prompt:'Baseball badge art of a catcher in full gear behind home plate, dark teal and white, vintage sports card aesthetic'},
  mays:{name:'The Say Hey Kid',prompt:'Baseball badge art of outfielder making iconic over-the-shoulder catch, orange sunset, gold outline, vintage 1950s aesthetic'},
  clemente:{name:'The Natural',prompt:'Baseball badge art of right fielder throwing on a rope to home plate, Pittsburgh black and gold, heroic illustration'},
  ted:{name:'The Splendid Splinter',prompt:'Vintage baseball badge of left fielder in perfect swing, .406 shown in bold, Boston navy and red, 1940s illustrated style'},
  brooks:{name:'Human Vacuum',prompt:'Baseball badge of third baseman making impossible diving stop, Baltimore orange and black, 1970 World Series energy'},
  gehrig:{name:'The Iron Horse',prompt:'Baseball badge honoring 2130 consecutive games, NY pinstripes, 1930s vintage style, iron texture, gold frame'},
  morgan:{name:'Little Big Man',prompt:'Baseball badge of second baseman turning double play pivot, Cincinnati Big Red Machine red, 1970s style'},
  gibson:{name:'The Black Ace',prompt:'Baseball badge of pitcher glaring from mound, 1.12 ERA in bold, Cardinals red and white, 1968 style'},
  rickey:{name:'Man of Steal',prompt:'Baseball badge of baserunner in head-first slide, dirt spray, 1406 in bold, Oakland green and gold'},
  badge_42:{name:'42',prompt:'Commemorative badge number 42 bold white on navy, Jackie Robinson tribute, American flag colors, gold frame'},
  cooperstown:{name:'Cooperstown',prompt:'Hall of Fame badge with Cooperstown plaque aesthetic, bronze and gold, bat and ball crossed, ornate frame'},
  walkoff:{name:'Walk-Off',prompt:'Explosive badge of walk-off moment, teammates flooding field, red and gold celebration, fireworks'},
};

// ── SITUATION BANK FETCH ──────────────────────────────────────────────────────
async function fetchSituation(position, tier, age_level) {
  const params = new URLSearchParams({
    select: '*',
    age_level: `eq.${age_level}`,
    tier: `eq.${tier}`,
    order: 'times_used.asc',
    limit: '10',
    outs: 'lte.2'
  });
  const url = `${SB_URL}/rest/v1/situation_bank?${params}&positions_involved=cs.{${position}}`;
  try {
    const res = await fetch(url, { headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || data.length === 0) {
      // Fallback: try adjacent tier
      const fallbackTier = tier > 1 ? tier - 1 : 2;
      const fp = new URLSearchParams({ select:'*', age_level:`eq.${age_level}`, tier:`eq.${fallbackTier}`, order:'times_used.asc', limit:'10', outs:'lte.2' });
      const fr = await fetch(`${SB_URL}/rest/v1/situation_bank?${fp}&positions_involved=cs.{${position}}`, { headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` } });
      if (!fr.ok) return null;
      const fd = await fr.json();
      return fd?.[Math.floor(Math.random() * (fd?.length || 1))] || null;
    }
    return data[Math.floor(Math.random() * data.length)];
  } catch(e) { return null; }
}

// ── /generate — Two-Stage Generation ─────────────────────────────────────────
async function handleGenerate(request, env) {
  let body;
  try { body = await request.json(); } catch(e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
  }

  const { position, tier, age_level } = body;
  if (!position || !tier) {
    return new Response(JSON.stringify({ error: 'Missing position or tier' }), { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
  }

  const level = age_level || 'competitive';

  // Stage 1: Get real situation from bank
  let situation = await fetchSituation(position, parseInt(tier), level);

  // Pre-flight: reject dead-play situations
  if (situation) {
    const dead = (
      situation.outs === 2 &&
      ['field_out','sac_fly'].includes(situation.event_type) &&
      ['fly_ball'].includes(situation.ball_type) &&
      position !== 'Baserunner'
    );
    if (dead) situation = await fetchSituation(position, parseInt(tier), level);
  }

  // Stage 2: Build prompt with baked-in rules
  let situationContext = '';
  if (situation) {
    const runners = (situation.runners || []).join(', ') || 'none';
    situationContext = `
REAL MLB SITUATION — base your scenario on this exactly:
- Inning: ${situation.inning}, ${situation.half_inning} half
- Outs: ${situation.outs} (ALWAYS include this in the scenario)
- Count: ${situation.balls}-${situation.strikes}
- Runners on: ${runners}
- Ball type: ${situation.ball_type}
- Ball location: ${situation.ball_location}
- Source play: ${situation.source_description}
- Batter: ${situation.batter_hand || 'R'}HH

Write from the ${position}'s perspective. Keep the game state but make it a training question.

CRITICAL BEFORE WRITING:
- If outs=2 AND a fly ball is CAUGHT: inning is over. Reframe to pre-pitch positioning instead.
- NEVER write a question where the answer is "the play is already over."
- ALWAYS state the out count in the scenario.`;
  } else {
    situationContext = `Generate a realistic high-frequency situation for ${position} at ${level} level, Tier ${tier}. State out count explicitly.`;
  }

  const tierDef = tier=='1'||tier===1
    ? 'Tier 1 — First instinct only. Where do you go? What do you do first? One decision, no reads.'
    : tier=='2'||tier===2
    ? 'Tier 2 — Execution. You know where to go — now how do you do it right? Footwork, reads, technique.'
    : 'Tier 3 — The read within the play. Game state matters, multiple options live, what does the situation tell you?';

  const ageDef = level==='foundation'
    ? 'Foundation (8-12): Basic reads only. High percentage plays. Simple correct answer.'
    : level==='development'
    ? 'Development (13-15): Starting to add reads and decisions. Player knows the game basics.'
    : level==='competitive'
    ? 'Competitive (16-18): Full situational baseball. Player executes correctly under pressure.'
    : 'Elite (18+): Every option live. Game state drives the decision. This separates good from great.';

  const prompt = `You write ONE baseball IQ training question for the Diamond IQ app.

POSITION: ${position}
${tierDef}
${ageDef}

${situationContext}

COMPLETE RULE ENGINE — FOLLOW EVERY RULE. VIOLATIONS DISQUALIFY THE QUESTION:
${BAKED_RULES}

VOICE STANDARD:
${BAKED_VOICE}

ABSOLUTE BASEBALL BASICS — VIOLATING THESE = DISCARD AND RESTART:
- TWO OUTS + FLY BALL CAUGHT = THIRD OUT. INNING OVER. No tag-up, no throw, no cutoff question after.
- TWO OUTS + ANY OUT RECORDED = INNING OVER.
- THREE OUTS IS IMPOSSIBLE AS A GAME STATE. Never use 3 outs in a scenario.
- Tag-up questions only valid with 0 or 1 out.
- A runner on third cannot score on a caught fly ball with 2 outs.
- Every scenario MUST state the out count explicitly.
- The ${position} must be DIRECTLY involved in the play.
- Force play: R2 alone is NOT forced without R1.
- CUT/THROUGH called by TARGET BASE PLAYER ONLY. Catcher=home. 3B=third. SS NEVER calls CUT/THROUGH.
- Cutoffs ABSOLUTE: LF->Home=3B, LF->3rd=SS, CF->Home=1B, CF->3rd=SS, RF->Home=1B, RF->3rd=2B.
- Steal = TAG play. Must physically tag runner. Touching bag alone is not an out.
- All answers/explanations: 15 words maximum.
- Wrong answers: active real mistakes only. Never passive. Never impossible.
TIMING RULE — THIS IS THE MOST IMPORTANT INSTRUCTION:
The scenario FREEZES at the moment BEFORE the decision must be made. The ball is in the air, or just off the bat, or the runner is breaking — and the question asks what YOU do RIGHT NOW. The scenario never describes what happened after the decision. Never say "the shortstop threw to second and the runner was out." Say "grounder to short — runner breaking from first. What do you do?" The play is live. The outcome has not happened yet. You are frozen at the decision point. Write the scenario like you hit pause at the exact moment the player must choose.

OUTPUT: ONLY this JSON. No other text. No markdown:
{"scenario":"1-2 punchy present-tense sentences — frozen at the decision moment, out count stated","stem":"one direct question — dugout voice","source":"Section X.X rule name","choices":[{"letter":"A","text":"under 12 words"},{"letter":"B","text":"under 12 words"},{"letter":"C","text":"under 12 words"},{"letter":"D","text":"under 12 words"}],"correct":"A","correct_exp":"under 15 words dugout voice with rule","wrong_exps":{"B":"under 12 words active","C":"under 12 words active","D":"under 12 words active"},"situation_id":"${situation?.id||''}","source_game_pk":${situation?.source_game_pk||0}}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1200, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await res.json();
    if (!res.ok) return new Response(JSON.stringify({ error: 'Anthropic error', details: data }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
    const raw = data.content[0].text.replace(/```json|```/g, '').trim();
    const q = JSON.parse(raw);
    q.position = position;
    q.tier = tier;
    q.age_level = level;
    // Update times_used
    if (situation?.id) {
      fetch(`${SB_URL}/rest/v1/situation_bank?id=eq.${situation.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` },
        body: JSON.stringify({ times_used: (situation.times_used || 0) + 1 })
      });
    }
    return new Response(JSON.stringify(q), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
  } catch(err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
  }
}

// ── /save ─────────────────────────────────────────────────────────────────────
async function handleSave(request) {
  let q;
  try { q = await request.json(); } catch(e) { return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:{...CORS_HEADERS,'Content-Type':'application/json'}}); }
  const li={'A':1,'B':2,'C':3,'D':4};
  const ci=li[q.correct]||1;
  const cc=(q.choices||[]).find(c=>c.letter===q.correct);
  const row={
    difficulty:parseInt(q.tier)||1, category:q.position, position:q.position,
    scenario:q.scenario, question_type:'multiple_choice', question:q.stem,
    choice_a:(q.choices[0]||{}).text||'', choice_b:(q.choices[1]||{}).text||'',
    choice_c:(q.choices[2]||{}).text||'', choice_d:(q.choices[3]||{}).text||'',
    correct_index:ci, correct_answer:q.correct,
    correct_answer_resolved:cc?cc.text:'', explanation:q.correct_exp||'',
    wrong_why_b:(q.wrong_exps||{}).B||null, wrong_why_c:(q.wrong_exps||{}).C||null, wrong_why_d:(q.wrong_exps||{}).D||null,
    audit_status:'generator_approved', audit_notes:q.source||'',
    is_active:true, voice_check:'pass', tier:String(q.tier),
    age_level:q.age_level||'competitive',
    tags:[q.position.toLowerCase().replace(/ /g,'_'),`tier${q.tier}`,q.age_level||'competitive']
  };
  try {
    const res=await fetch(`${SB_URL}/rest/v1/questions`,{method:'POST',headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':`Bearer ${SB_KEY}`,'Prefer':'return=representation'},body:JSON.stringify(row)});
    const data=await res.json();
    if(!res.ok) return new Response(JSON.stringify({error:'Supabase error',details:data}),{status:500,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});
    return new Response(JSON.stringify({success:true,id:data[0]?.id}),{headers:{...CORS_HEADERS,'Content-Type':'application/json'}});
  } catch(err){return new Response(JSON.stringify({error:err.message}),{status:500,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});}
}

// ── /flag ─────────────────────────────────────────────────────────────────────
async function handleFlag(request) {
  let q;
  try { q = await request.json(); } catch(e) { return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:{...CORS_HEADERS,'Content-Type':'application/json'}}); }
  const li={'A':1,'B':2,'C':3,'D':4};
  const ci=li[q.correct]||1;
  const cc=(q.choices||[]).find(c=>c.letter===q.correct);
  const row={
    difficulty:parseInt(q.tier)||1, category:q.position, position:q.position,
    scenario:q.scenario, question_type:'multiple_choice', question:q.stem,
    choice_a:(q.choices[0]||{}).text||'', choice_b:(q.choices[1]||{}).text||'',
    choice_c:(q.choices[2]||{}).text||'', choice_d:(q.choices[3]||{}).text||'',
    correct_index:ci, correct_answer:q.correct,
    correct_answer_resolved:cc?cc.text:'', explanation:q.correct_exp||'',
    wrong_why_b:(q.wrong_exps||{}).B||null, wrong_why_c:(q.wrong_exps||{}).C||null, wrong_why_d:(q.wrong_exps||{}).D||null,
    audit_status:'flagged', audit_notes:q.source||'', coach_notes:q.flag_reason||'',
    is_active:true, voice_check:'fail', tier:String(q.tier),
    age_level:q.age_level||'competitive',
    tags:[q.position.toLowerCase().replace(/ /g,'_'),`tier${q.tier}`,'flagged']
  };
  try {
    const res=await fetch(`${SB_URL}/rest/v1/questions`,{method:'POST',headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':`Bearer ${SB_KEY}`,'Prefer':'return=representation'},body:JSON.stringify(row)});
    const data=await res.json();
    if(!res.ok) return new Response(JSON.stringify({error:'Supabase error',details:data}),{status:500,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});
    return new Response(JSON.stringify({success:true,id:data[0]?.id}),{headers:{...CORS_HEADERS,'Content-Type':'application/json'}});
  } catch(err){return new Response(JSON.stringify({error:err.message}),{status:500,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});}
}

// ── Main handler ──────────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    if(request.method==='OPTIONS') return new Response(null,{headers:CORS_HEADERS});
    const url=new URL(request.url);
    if(url.pathname==='/generate'&&request.method==='POST') return handleGenerate(request,env);
    if(url.pathname==='/save'&&request.method==='POST') return handleSave(request);
    if(url.pathname==='/flag'&&request.method==='POST') return handleFlag(request);
    const badgeId=url.searchParams.get('badge')||(request.method==='POST'?(await request.json().catch(()=>({}))).badge_id:null);
    if(!badgeId) return new Response(JSON.stringify({error:'badge parameter required',available:Object.keys(BADGE_PROMPTS)}),{status:400,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});
    const bd=BADGE_PROMPTS[badgeId];
    if(!bd) return new Response(JSON.stringify({error:`Unknown badge: ${badgeId}`}),{status:404,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});
    try{
      const response=await env.AI.run('@cf/black-forest-labs/flux-1-schnell',{prompt:bd.prompt,num_steps:8,width:512,height:512});
      return new Response(JSON.stringify({badge_id:badgeId,name:bd.name,image:response.image,format:'png'}),{headers:{...CORS_HEADERS,'Content-Type':'application/json','Cache-Control':'public, max-age=86400'}});
    }catch(err){return new Response(JSON.stringify({error:err.message}),{status:500,headers:{...CORS_HEADERS,'Content-Type':'application/json'}});}
  }
};

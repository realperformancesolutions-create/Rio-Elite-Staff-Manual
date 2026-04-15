export interface BulletItem {
  type: "bullet";
  items: string[];
}

export interface NumberedItem {
  type: "numbered";
  items: string[];
}

export interface BodyText {
  type: "body";
  text: string;
}

export interface ItalicIntro {
  type: "italic_intro";
  text: string;
}

export interface SectionLabel {
  type: "section_label";
  text: string;
}

export interface LinkItem {
  type: "link";
  label: string;
  url: string;
}

export interface TwoColItem {
  type: "two_col";
  left: string;
  right: string;
}

export interface GripCards {
  type: "grip_cards";
  cards: { letter: string; word: string; desc: string }[];
}

export interface PenaltyTable {
  type: "penalty_table";
  rows: { amount: string; description: string; notes: string }[];
}

export interface BonusTable {
  type: "bonus_table";
  rows: { amount: string; description: string; notes: string }[];
}

export interface StepList {
  type: "steps";
  items: { title: string; desc: string }[];
}

export type ContentBlock =
  | BulletItem
  | NumberedItem
  | BodyText
  | ItalicIntro
  | SectionLabel
  | LinkItem
  | TwoColItem
  | GripCards
  | PenaltyTable
  | BonusTable
  | StepList;

export interface ManualSection {
  num: string;
  title: string;
  sub: string;
  content: ContentBlock[];
}

export const SECTIONS: ManualSection[] = [
  {
    num: "01",
    title: "WELCOME & MISSION STATEMENT",
    sub: "Who We Are, What We Stand For",
    content: [
      {
        type: "body",
        text: "Welcome to the Rio Elite coaching staff. You have joined a program that holds itself to the highest standard — not just in competition, but in character, professionalism, and commitment to the athletes and families we serve.",
      },
      {
        type: "body",
        text: "This manual is your operational guide. It outlines what is expected of you, how we operate as a program, and the systems and standards that define the Rio Elite coaching experience. Read it carefully, refer to it often, and hold yourself accountable to everything inside it.",
      },
      {
        type: "section_label",
        text: "1.1  MISSION STATEMENT",
      },
      {
        type: "italic_intro",
        text: "Our mission at Rio Elite is to instill a passion for the sport, for teamwork, and for learning in a positive, faith-based environment.",
      },
      {
        type: "section_label",
        text: "1.2  CORE VALUE STATEMENT",
      },
      {
        type: "italic_intro",
        text: "At Rio Elite, we are guided by four core values: Team Work, Integrity, Faith, and Accountability. These values shape every interaction — with athletes, with parents, with co-coaches, and with program leadership. Every coach is expected to embody these values in everything they do.",
      },
      {
        type: "body",
        text: "Every coach at Rio Elite is expected to embody these values in every interaction — with athletes, with parents, with co-coaches, and with program leadership. When in doubt about how to handle a situation, ask yourself: does this reflect our core values?",
      },
    ],
  },
  {
    num: "02",
    title: "G.R.I.P. CORE VALUES",
    sub: "As Applied to Coaches — The Foundation of Our Coaching Staff",
    content: [
      {
        type: "italic_intro",
        text: "Our coaching philosophy is built on four core pillars. As a Rio Elite coach, these values are not aspirational — they are operational. They guide every decision you make, every interaction you have, and every practice you run.",
      },
      {
        type: "grip_cards",
        cards: [
          {
            letter: "G",
            word: "GUIDANCE",
            desc: "As a coach, you are the compass for your athletes. You provide clear direction, model correct technique, and lead by example — demonstrating the right way to handle challenges, setbacks, and victories. Your athletes look to you to guide them not only in skill development but in character and discipline.",
          },
          {
            letter: "R",
            word: "RESILIENCE",
            desc: "You stay positive and composed under pressure — through difficult competitions, skill plateaus, and team setbacks. You foster a resilient mindset in your athletes by shutting down negativity, discouraging doubt, and keeping the team focused on growth through both victories and challenges.",
          },
          {
            letter: "I",
            word: "INSPIRATION",
            desc: "Great coaches do more than teach skills — they ignite a passion for the sport. You inspire athletes to push beyond their perceived limits, celebrate progress, and believe in what the team can achieve together. Your energy, enthusiasm, and belief in each athlete is contagious.",
          },
          {
            letter: "P",
            word: "PARTNERSHIP",
            desc: "You are a partner to your athletes, their families, and the entire Rio Elite staff. You collaborate with co-coaches, support program systems, communicate proactively with leadership, and contribute to a culture where everyone works toward a shared goal.",
          },
        ],
      },
    ],
  },
  {
    num: "03",
    title: "GENERAL EMPLOYMENT AGREEMENTS",
    sub: "Core Competencies, Credentialing & Standards of Employment",
    content: [
      {
        type: "section_label",
        text: "3.1  CORE COMPETENCIES",
      },
      {
        type: "body",
        text: "All Rio Elite coaches are expected to demonstrate the following core competencies throughout their employment:",
      },
      {
        type: "bullet",
        items: [
          "Technical Knowledge: Proficiency in cheerleading skills appropriate to the level being coached, including tumbling, stunting, jumps, and choreography.",
          "Communication: Clear, professional, and timely communication with athletes, parents, co-coaches, and program leadership.",
          "Organization: Ability to plan, prepare, and execute structured practice plans with end-of-day reports.",
          "Accountability: Taking ownership of team performance, athlete development, and personal professional conduct.",
          "Adaptability: Ability to adjust coaching strategies in response to athlete needs, competition feedback, and program direction.",
          "Professionalism: Representing Rio Elite with integrity at all times — in the gym, at competitions, and on social media.",
        ],
      },
      {
        type: "section_label",
        text: "3.2  CREDENTIALING REQUIREMENTS",
      },
      {
        type: "body",
        text: "All coaches must maintain current credentialing as required by Rio Elite and USASF.",
      },
      {
        type: "bullet",
        items: [
          "Valid background check on file (renewed annually).",
          "Current safety certification as required by the USASF.",
          "CPR/First Aid certification (must be kept current).",
          "Any additional certifications required by the specific division or level being coached.",
          "Completion of all mandatory program training and onboarding materials.",
        ],
      },
      {
        type: "section_label",
        text: "3.3  PROBATIONARY PERIOD",
      },
      {
        type: "body",
        text: `All new coaches begin employment with a probationary period. During this time, performance will be evaluated based on attendance, practice quality, athlete development, communication, and adherence to program systems. To support clarity and development, formal check-ins will be conducted at 30 days, 60 days, and 90 days (final evaluation). These checkpoints are designed to provide feedback, address any gaps, and ensure alignment with program standards. Successful completion of the 90-day probationary period is required for continued employment.`,
      },
      {
        type: "section_label",
        text: "3.4  REPORTING STRUCTURE",
      },
      {
        type: "body",
        text: `All team coaches report directly to the All-Star Director. Any concerns, questions, or issues must be communicated through the proper chain of command: All-Star Director, Program Director, Ownership. Coaches are not to escalate issues beyond this structure without first following each level of communication. The only exception is in cases where the issue directly involves the individual at that level of the chain. In cases involving the All-Star Director directly, concerns should be brought to the Program Director or Ownership. In cases involving the Program Director directly, concerns should be escalated to Ownership.`,
      },
    ],
  },
  {
    num: "04",
    title: "PROFESSIONAL STANDARDS & ENGAGED COACHING",
    sub: "Conduct, Appearance & Coaching Philosophy",
    content: [
      {
        type: "section_label",
        text: "4.1  ENGAGED COACHING STANDARDS",
      },
      {
        type: "body",
        text: "Rio Elite coaches are expected to be fully present and actively engaged during every practice session. Engaged coaching means:",
      },
      {
        type: "bullet",
        items: [
          "Being on the floor and actively coaching — not sitting, scrolling on your phone, or having personal conversations during practice time.",
          "Providing real-time, specific, and constructive feedback to athletes.",
          "Monitoring athlete safety at all times, particularly during stunting and tumbling.",
          "Maintaining high energy and a positive coaching presence that motivates athletes.",
          "Correcting technique immediately and consistently — not allowing bad habits to go unchecked.",
          "Knowing your athletes by name and understanding their individual strengths and areas for growth.",
        ],
      },
      {
        type: "section_label",
        text: "4.2  RIO ELITE BRANDING & APPEARANCE",
      },
      {
        type: "body",
        text: "Coaches are representatives of the Rio Elite brand at all times. The following standards apply to your appearance in the gym and at all program events:",
      },
      {
        type: "bullet",
        items: [
          "Rio Elite-branded apparel must be worn during all practices and program events.",
          "Clothing must be clean, in good condition, and appropriate for an athletic coaching environment.",
          "Coaches are required to wear proper athletic footwear at all times. Barefoot, sandals, Crocs, or any open-toed or non-supportive footwear are not permitted.",
          "Hair must be neat and out of the face during practice.",
          "Excessive or distracting jewelry is not permitted during practice.",
          
        ],
      },
      {
        type: "section_label",
        text: "4.3  PROFESSIONAL CONDUCT",
      },
      {
        type: "bullet",
        items: [
          "Coaches must maintain a professional demeanor at all times — in the gym, at competitions, and in all digital communications.",
          "Profanity, inappropriate language, or disrespectful communication toward athletes, parents, or colleagues is strictly prohibited.",
          "Coaches must never engage in arguments or confrontations with parents in front of athletes.",
          "Any disputes or concerns must be handled privately and professionally through the appropriate chain of command.",
          "Coaches are prohibited from discussing other coaches, athletes, or program matters in a negative or disparaging manner.",
          "Coaches must never make promises to athletes or parents regarding team placements, skill progressions, or competition outcomes without authorization from leadership.",
        ],
      },
    ],
  },
  {
    num: "05",
    title: "PRACTICE PLANNING & SYSTEMS",
    sub: "Practice Plans, End of Day Reports & Non-Negotiable Systems",
    content: [
      {
        type: "section_label",
        text: "5.1  PRACTICE PLAN REQUIREMENTS",
      },
      {
        type: "body",
        text: "Every practice must be planned in advance. A written practice plan must be submitted in the Team Band before each practice session. Practice plans are not optional — they are a non-negotiable requirement of your coaching position.",
      },
      {
        type: "bullet",
        items: [
          "Practice plans must be posted in the Team Band prior to the start of practice.",
          "Plans must account for every minute of practice time — be specific with coaching goals and direct in your expectations.",
          "Practice plans must include all non-negotiable systems: H.I.I.T. warm-up, stretch system, tumbling drills, and jump system (minimum once per week).",
          "Scheduled practices are NOT to be used for choreography purposes. Routine changes must be done outside of normally scheduled practice time.",
          `PENALTY: Coaches are allowed up to 2 missed practice plan submissions.

Beginning with the 3rd missed submission, a $10.00 deduction will be applied for each additional missed plan.`,
        ],
      },
      {
        type: "section_label",
        text: "5.2  THE THREE PILLARS OF PRACTICE PLANNING",
      },
      {
        type: "body",
        text: "Every practice plan at Rio Elite must be built on three core principles. These pillars define what a quality practice plan looks like and how it is executed.",
      },
      {
        type: "bullet",
        items: [
          "DETAILED PLAN: Every minute of practice must be accounted for. Be specific with your coaching goals and direct in your expectations. A plan that says 'work on stunts' is not a plan — a plan that says 'work on the load-in timing for the double-down sequence at count 32' is a plan.",
          "COMMUNICATE: Efficiency comes from everyone having a clear understanding of the plan. This includes co-coaches, athletes, and parents. Plans posted to Band before practice provide documentation, transparency, and protection.",
          "EXECUTE WITH FLEXIBILITY: The environment can change unexpectedly — unforeseen tardiness, injuries, or coaching conflicts. Flexibility allows adjustments in response to changing circumstances while still maintaining focus and discipline. Flexibility is not an excuse for lack of planning.",
        ],
      },
      {
        type: "section_label",
        text: "5.3  END OF DAY (EOD) REPORT",
      },
      {
        type: "body",
        text: "The End of Day Report is a critical accountability and communication tool. It ensures that program leadership has a clear picture of what happened at every practice and what the plan is going forward.",
      },
      {
        type: "link",
        label: "Submit your End of Day Report",
        url: "https://cheer-eod-ew9gfaes.manus.space",
      },
      {
        type: "bullet",
        items: [
          "An EOD report must be completed at the end of every practice day (estimated time: 5–10 minutes).",
          "The report must include: work completed during practice, work in progress, and plans for the next session.",
          "EOD reports are turned in nightly to the All-Star Director and placed in the team binder.",
          "EOD reports provide documentation for future planning and serve as added protection for coaches.",
          "PENALTY: Failure to complete an EOD report = $10.00 deduction per missed report.",
          "Failure to complete EOD reports consistently is grounds for a formal write-up.",
        ],
      },
    ],
  },
  {
    num: "06",
    title: "DAILY PRACTICE SYSTEMS",
    sub: "Non-Negotiable Systems That Must Be Executed at Every Practice",
    content: [
      {
        type: "italic_intro",
        text: "The following systems are non-negotiable. They must be incorporated into every practice, every session, every week. These systems are the foundation of athlete development at Rio Elite. There are no exceptions.",
      },
      {
        type: "section_label",
        text: "6.1  H.I.I.T. WARM-UP SYSTEM",
      },
      {
        type: "body",
        text: "High-Intensity Interval Training (H.I.I.T.) warm-up must be performed at the start of every practice. This system serves as both a physical warm-up and a conditioning tool, preparing athletes' bodies for the demands of practice while building overall athletic fitness.",
      },
      {
        type: "bullet",
        items: [
          "H.I.I.T. warm-up is mandatory at every single practice — no exceptions.",
          "The warm-up must be led by the coach with full participation from all athletes.",
          "Coaches must maintain high energy and set the tone for the entire practice during the warm-up.",
          "Modifications may be made for injured athletes, but all able-bodied athletes must participate fully.",
          "The H.I.I.T. system is designed to build cardiovascular endurance, strength, and mental toughness.",
        ],
      },
      {
        type: "section_label",
        text: "6.2  GENERAL STRETCH / FLYER STRETCH SYSTEM",
      },
      {
        type: "body",
        text: "Following the H.I.I.T. warm-up, a structured stretch system must be executed. This system includes both a general team stretch and a dedicated flyer stretch component.",
      },
      {
        type: "bullet",
        items: [
          "General stretch must be performed after H.I.I.T. at every practice.",
          "Flyer stretch is a dedicated flexibility training component for flyers and must be included in the practice plan.",
          "Coaches must actively supervise and assist with stretching — this is not free time.",
          "Proper stretching technique must be enforced to prevent injury.",
          "The stretch system is designed to improve flexibility, reduce injury risk, and develop the flexibility required for advanced stunting.",
        ],
      },
      {
        type: "section_label",
        text: "6.3  DAILY TUMBLING DRILL SYSTEM",
      },
      {
        type: "body",
        text: "Tumbling drills must be incorporated into every practice session. The daily tumbling drill system is designed to build foundational tumbling skills, reinforce technique, and progressively develop athletes' tumbling passes.",
      },
      {
        type: "bullet",
        items: [
          "Tumbling drills are mandatory at every practice.",
          "Drills must be structured and progressive — not just open tumbling time.",
          "Coaches must actively spot, correct, and encourage during tumbling drills.",
          "All athletes must participate in tumbling drills at their appropriate level.",
          "Coaches must document tumbling progress in their EOD reports.",
          "Safety protocols must be strictly followed during all tumbling activities.",
        ],
      },
      {
        type: "section_label",
        text: "6.4  JUMP SYSTEM",
      },
      {
        type: "body",
        text: "The jump system must be executed at a minimum of once per week — this is a non-negotiable requirement. Rio Elite uses two distinct jump system options depending on where the team is in the season. Coaches must select the appropriate option based on the current phase of the season.",
      },
      {
        type: "body",
        text: "All drills in both jump systems are choreographed and performed on an 8-count track. This means arm paths, leg actions, and timing are predefined. Athletes know exactly when to move and how to move. Running drills on an 8-count allows coaches to keep athletes synchronized, control tempo and intensity, transition quickly between drills, eliminate wasted instruction time, and maintain practice flow without stopping. Instead of explaining every rep, the count and choreography drive execution.",
      },
      {
        type: "body",
        text: "Jump training is always divided into three distinct sections that are not interchangeable and are never combined randomly. Each section trains a different physical quality and serves a specific purpose: Plyometrics (explosive power and height), Isometrics (strength and body position), and Repetitions (muscle memory and consistency). Regardless of which system is in use, each section is given equal priority in the practice plan. No single section matters more than the others — consistency comes from training all three intentionally, not favoring one.",
      },
      {
        type: "section_label",
        text: "6.4A  OPTION 1: THE 30-MINUTE FOUNDATION SYSTEM (Building Phase)",
      },
      {
        type: "body",
        text: "The 30-Minute Foundation System is the primary jump training system used during the building phase of the season. This system is designed to be used from the start of the season through mid-season. During this phase, athletes return from summer breaks and practices shift toward routine construction, stunting, and tumbling being finalized. The Foundation System begins to introduce jumps into practice through extended conditioning blocks that are short, intentional segments that integrate directly into practice. The emphasis is on quality, organization, and consistency — not volume.",
      },
      {
        type: "bullet",
        items: [
          "Used during the building phase of the season (early to mid-season).",
          "Dedicated 30-minute block structured across Plyometrics, Isometrics, and Repetitions.",
          "Designed to build jump height, technique, and consistency from the ground up.",
          "All drills are run on an 8-count choreographed track — no free-form reps.",
          "Coaches must actively lead, count, and correct throughout the entire block.",
          "This system is the foundation — athletes who master this phase carry that quality into the maintenance phase.",
        ],
      },
      {
        type: "section_label",
        text: "6.4B  OPTION 2: THE 5-5-5 MAINTENANCE SYSTEM (Maintenance Phase)",
      },
      {
        type: "body",
        text: "The 5-5-5 Maintenance System is used during the maintenance phase of the season. Once the season is underway, the goal is no longer to build — it is to maintain. Jump training is condensed into a simple 5-5-5 structure: 5 minutes of Plyometrics, 5 minutes of Isometrics, and 5 minutes of Repetitions. This keeps jumps sharp without stealing time from routines, stunts, or tumbling. Maintenance is what allows jumps to stay consistent late in the season, when most teams see decline.",
      },
      {
        type: "bullet",
        items: [
          "Used during the maintenance phase of the season (mid-season through competition season).",
          "5 minutes Plyometrics + 5 minutes Isometrics + 5 minutes Repetitions = 15-minute total block.",
          "Designed to preserve jump quality already built during the Foundation phase.",
          "All drills remain on the 8-count choreographed track — same structure, condensed time.",
          "Coaches must maintain the same energy and standards as the Foundation System — shorter does not mean less focused.",
          "Do not skip the 5-5-5 because the season is busy — this is exactly when it matters most.",
        ],
      },
      {
        type: "bullet",
        items: [
          "MINIMUM REQUIREMENT: The jump system (either option) must be completed at least once per week.",
          "The choice of system is determined by the current phase of the season — not by coach preference or convenience.",
          "Jump performance must be tracked and documented as part of athlete development progress in the EOD report.",
        ],
      },
      {
        type: "section_label",
        text: "6.5  THEMED PRACTICES",
      },
      {
        type: "body",
        text: "Themed practices are an effective tool for boosting team morale, athlete engagement, and overall program culture. Coaches are encouraged to incorporate themed practices throughout the season. Themes may include holiday-themed practices, spirit days, or milestone celebration practices. Themed practices must still include all non-negotiable systems and must be planned in advance.",
      },
    ],
  },
  {
    num: "07",
    title: "ATHLETE ATTENDANCE & TEAM MANAGEMENT",
    sub: "Tracking, Communication & Team Culture",
    content: [
      {
        type: "section_label",
        text: "7.1  ATHLETE ATTENDANCE TRACKING",
      },
      {
        type: "body",
        text: "Coaches are responsible for tracking athlete attendance at every practice. Accurate attendance records are essential for athlete development, team planning, and program accountability.",
      },
      {
        type: "bullet",
        items: [
          "Attendance must be taken at the start of every practice and documented in the EOD report.",
          "Coaches must follow up with absent athletes and their families within 24 hours of a missed practice.",
          "Patterns of absence must be reported to the All Star Director immediately.",
          "Coaches must maintain awareness of how absences are impacting team skill development and routine execution.",
          "Document all absence follow-up in your End of Day Report.",
        ],
      },
      {
        type: "section_label",
        text: "7.2  ATHLETE ABSENCE PROCEDURES",
      },
      {
        type: "bullet",
        items: [
          "Athletes must notify the coach in advance of any planned absence.",
          "Unexcused absences must be reported to the All-Star Director.",
          "Coaches must have a clear attendance policy communicated to athletes and families at the start of the season.",
          "Repeated unexcused absences may result in the athlete being removed from performance opportunities.",
          "Coaches must document all absences and follow-up actions in the team binder and EOD report.",
        ],
      },
      {
        type: "section_label",
        text: "7.3  TEAM BONDING & CULTURE",
      },
      {
        type: "body",
        text: "Building a strong team culture is one of the most important responsibilities of a Rio Elite coach. A team that trusts each other, supports each other, and holds each other accountable will always outperform a team of more talented individuals who lack cohesion.",
      },
      {
        type: "bullet",
        items: [
          "Coaches must actively foster a positive, inclusive, and high-performance team culture.",
          "Team bonding activities should be incorporated into the season plan, and coaches are expected to attend and actively participate in all scheduled team events.",
          "Coaches must address any bullying, exclusion, or negative social dynamics immediately.",
          "Celebrate individual and team milestones — recognition is a powerful motivational tool.",
          "Model the team culture you want to see — athletes will mirror the energy and attitude of their coach.",
        ],
      },
    ],
  },
  {
    num: "08",
    title: "PARENT COMMUNICATION",
    sub: "Standards, Expectations & Retention Strategies",
    content: [
      {
        type: "section_label",
        text: "8.1  COMMUNICATION STANDARDS",
      },
      {
        type: "body",
        text: "Professional and proactive parent communication is a core responsibility of every Rio Elite coach. Parents are partners in the athlete's development, and maintaining a positive relationship with the parent community directly impacts team retention and program growth.",
      },
      {
        type: "bullet",
        items: [
          "All parent communication must be professional, respectful, and solution-oriented.",
          "Coaches must respond to parent messages within 24 hours during the regular season.",
          "Negative or confrontational conversations with parents must be handled privately — never in front of athletes or other parents.",
          "Coaches must never discuss other athletes' skills, placements, or personal situations with parents.",
          "All significant parent communications should be documented in the EOD report.",
        ],
      },
      {
        type: "section_label",
        text: "8.2  RETENTION STRATEGIES",
      },
      {
        type: "body",
        text: "Athlete retention is a key performance metric for every Rio Elite coach. A coach who builds strong relationships with athletes and families, communicates proactively, and creates a positive experience will naturally retain athletes season after season.",
      },
      {
        type: "bullet",
        items: [
          "Celebrate new skill achievements — notify parents when their athlete hits a new skill milestone.",
          "Communicate the team's progress and goals regularly so parents feel informed and invested.",
          "Address concerns quickly and professionally — unresolved concerns are the leading cause of athlete departure.",
          "Create opportunities for parent involvement that are appropriate and structured.",
          "Conduct end-of-season athlete and parent feedback sessions to identify areas for improvement.",
          "Maintain a retention rate of no less than 75% — this is a performance benchmark.",
        ],
      },
      {
        type: "section_label",
        text: "8.3  COMMUNICATION CHANNELS",
      },
      {
        type: "bullet",
        items: [
          "Band is the official communication platform for team-related announcements and updates.",
          "All team communications must go through Band — not personal text messages or social media DMs.",
          "Coaches must post practice plans to Band before each practice.",
          "Emergency communications must be escalated to the All Star Director immediately.",
          "Coaches must never communicate with athletes under the age of 18 through personal social media accounts.",
        ],
      },
    ],
  },
  {
    num: "09",
    title: "COMPETITION PROTOCOLS & TRAVEL",
    sub: "Preparation, Day-Of Responsibilities & Travel Standards",
    content: [
      {
        type: "section_label",
        text: "9.1  TEAM PREPAREDNESS & COMPETITION ROUTINES",
      },
      {
        type: "body",
        text: "The following benchmarks must be met for all teams. These are non-negotiable performance standards for competition readiness:",
      },
      {
        type: "bullet",
        items: [
          "All tumbling and stunt elements must be identified and in training early in the season.",
          "The full routine (excluding pyramid) must be complete and running by the mid-season checkpoint.",
          "Teams must begin going full-out through the pyramid section during the mid-season window.",
          "The full pyramid must be complete and incorporated into the routine by the late mid-season checkpoint.",
          "Teams must begin going full-out including the pyramid from the late mid-season checkpoint forward.",
          "Teams must be going full-out no less than twice per practice from the pre-competition checkpoint through the end of the competitive season.",
        ],
      },
      {
        type: "section_label",
        text: "9.2  COMPETITION DAY RESPONSIBILITIES",
      },
      {
        type: "bullet",
        items: [
          "Coaches must arrive at the competition venue at the designated call time — no exceptions.",
          "Coaches are responsible for athlete check-in, warm-up supervision, and floor supervision.",
          "All athletes must be accounted for at all times during competition day.",
          "Coaches must maintain a professional and composed demeanor regardless of performance outcomes.",
          "Post-performance debriefs must be constructive, specific, and forward-focused.",
          "Coaches must remain with their team throughout the entire competition day unless otherwise directed by leadership.",
        ],
      },
      {
        type: "section_label",
        text: "9.3  PROFESSIONAL DRESS CODE — COMPETITION DAY",
      },
      {
        type: "body",
        text: "A Rio Elite coach's appearance at competitions reflects directly on the program. The following dress code standards apply to all competition days:",
      },
      {
        type: "bullet",
        items: [
          "Official Rio Elite coaching apparel must be worn — no exceptions.",
          "Clothing must be clean, pressed, and in excellent condition.",
          "Shoes must be clean, professional athletic footwear appropriate for the competition floor.",
          "Hair must be neat, styled, and professional.",
          "Minimal, professional jewelry only — nothing that could be distracting or pose a safety risk.",
          "No visible tattoos that are considered inappropriate or offensive in a professional setting.",
          "Coaches should present themselves as they would want their athletes to present themselves — with pride, professionalism, and attention to detail.",
        ],
      },
      {
        type: "section_label",
        text: "9.4  TRAVEL POLICY",
      },
      {
        type: "bullet",
        items: [
          "All travel arrangements must be coordinated through program leadership.",
          "Coaches are responsible for knowing and following all travel itineraries.",
          "Per diem rates and reimbursement policies will be communicated by leadership prior to travel.",
          "Coaches must maintain professional conduct at all times during travel — you represent Rio Elite 24/7.",
          "Substance use policy applies during all travel — coaches may not consume alcohol while responsible for athletes.",
          "Any incidents during travel must be reported immediately to the All Star Director, as well as all directors within the program",
        ],
      },
    ],
  },
  {
    num: "10",
    title: "ATTENDANCE, PUNCTUALITY & TIME OFF",
    sub: "Coach Attendance Standards & Time Off Request Process",
    content: [
      {
        type: "section_label",
        text: "10.1  ATTENDANCE & PUNCTUALITY STANDARDS",
      },
      {
        type: "body",
        text: "Coach attendance and punctuality are fundamental to program operations. Every missed or late practice directly impacts athlete development and team morale. The following standards are non-negotiable:",
      },
      {
        type: "bullet",
        items: [
          "Coaches must be present at every scheduled practice and program event.",
          "Coaches must arrive at least 15 minutes before the scheduled start of practice to set up and prepare.",
          "Tardiness is defined as arriving after the scheduled start time without prior approval.",
          "Unexcused absences are defined as any absence not approved in advance by the All Star Director.",
          `PENALTY: Unexcused tardiness will be addressed using a tiered system:

1st offense: Warning
2nd offense: $15.00 deduction
3rd offense and beyond: $25.00 deduction per occurrence`,
          `PENALTY: Unexcused absences are tracked and escalate:
1st occurrence: Warning
2nd occurrence: $50.00 deduction
3rd occurrence and beyond: $100.00 deduction each time`,
          "Consistent attendance issues will result in a formal performance review and may result in termination.",
        ],
      },
      {
        type: "section_label",
        text: "10.2  TIME OFF REQUEST PROCESS",
      },
      {
        type: "body",
        text: "All time off requests must go through the following process. Requests that do not follow this process will not be approved and the absence will be considered unexcused.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Submit Request in employee portal",
            desc: `All time off requests must be submitted through the Employee Portal. Verbal requests will not be accepted.

All requests will go through a three-step approval process:

All Star Director
Program Director
Owner (final approval)

Time off is not considered approved until it has passed through all three levels of approval.`,
          },
          {
            title: "Minimum 2-Week Notice",
            desc: "Requests must be submitted a minimum of two weeks in advance. Emergency situations will be evaluated on a case-by-case basis.",
          },
          {
            title: "Provide Coverage Plan",
            desc: "The requesting coach must identify and arrange a qualified substitute coach and submit the coverage plan with the request.",
          },
          {
            title: "Await Approval/Denial Confirmation",
            desc: "Time off is not approved until it has gone through all three channels of approval — All Star Director, Program Director, and Owners. Verbal discussions do not count as approval.",
          },
          {
            title: "Brief Your Substitute",
            desc: "Before your absence, you must fully brief your substitute on the practice plan, athlete needs, and any relevant team information.",
          },
        ],
      },
      {
        type: "section_label",
        text: "10.3  SCHEDULED GYM CLOSURES & HOLIDAYS",
      },
      {
        type: "body",
        text: "Rio Elite observes the following scheduled gym closures each year. These are program-wide closures — no PTO is required for these periods. All staff are expected to be aware of these dates at the start of each season.",
      },
      {
        type: "section_label",
        text: "Program Scheduled Closures",
      },
      {
        type: "bullet",
        items: [
          "4th of July Week — Full week closure (early July)",
          "Spring Break Week — Full week closure (March/April, aligned with local school district)",
          "Thanksgiving Week — Full week closure (late November)",
          "Christmas / New Year Break — 2 full weeks closure (late December through early January)",
        ],
      },
      {
        type: "section_label",
        text: "Federal Holidays Observed",
      },
      {
        type: "body",
        text: "In addition to program closures, Rio Elite observes the following federal holidays. The gym will be closed on these days and no practices or events will be scheduled. These days are paid for all salaried staff and all non-salaried All Star coaches.",
      },
      {
        type: "bullet",
        items: [
          "New Year's Day — January 1",
          "Martin Luther King Jr. Day — 3rd Monday in January",
          "Memorial Day — Last Monday in May",
          "Juneteenth National Independence Day — June 19",
          "Independence Day — July 4",
          "Labor Day — 1st Monday in September",
          "Thanksgiving Day — 4th Thursday in November",
          "Christmas Day — December 25",
        ],
      },
      {
        type: "body",
        text: "Compensation during all scheduled closures and federal holidays: All salaried staff and non-salaried All Star coaches are paid at their normal rate for these periods. Other hourly staff are not compensated during gym closures.",
      },
      {
        type: "section_label",
        text: "10.4  PTO ACCRUAL POLICY",
      },
      {
        type: "body",
        text: "In addition to scheduled gym closures, all coaching staff accrue Paid Time Off (PTO) based on their years of service with Rio Elite. PTO is intended for personal days, appointments, or additional time away beyond scheduled closures. PTO does not roll over at the end of each season — unused days are forfeited. There is no cash payout for unused PTO.",
      },
      {
        type: "two_col",
        left: "0–1 Year (after 90-day probation)",
        right: "1 PTO Day per season",
      },
      {
        type: "two_col",
        left: "1–2 Years",
        right: "2 PTO Days per season",
      },
      {
        type: "two_col",
        left: "2–4 Years",
        right: "3 PTO Days per season",
      },
      {
        type: "two_col",
        left: "4+ Years",
        right: "5 PTO Days per season",
      },
      {
        type: "body",
        text: "PTO compensation: Salaried staff are paid at their normal rate. Hourly staff are paid based on their average regular coaching hours from the prior 4 weeks (private lesson hours excluded). PTO requests must follow the Time Off Request Process outlined in Section 10.2. Blackout periods apply — PTO may not be used during competition season (November–April) or any mandatory program events. Emergency and bereavement situations are reviewed on a case-by-case basis by the All Star Director.",
      },
    ],
  },
  {
    num: "11",
    title: "BONUS & PENALTY STRUCTURE",
    sub: "Financial Accountability & Performance Rewards",
    content: [
      {
        type: "italic_intro",
        text: "The following bonus and penalty structure is designed to create clear financial accountability for performance standards and to reward exceptional coaching outcomes. All deductions and bonuses are applied to the coach's compensation as outlined in the position agreement.",
      },
      {
        type: "section_label",
        text: "11.1  PENALTY SCHEDULE",
      },
      {
        type: "penalty_table",
        rows: [
          {
            amount: "Warning",
            description: "Tardiness — 1st Offense",
            notes: "Verbal warning issued. No financial deduction on first offense.",
          },
          {
            amount: "$15.00",
            description: "Tardiness — 2nd Offense",
            notes: "$15.00 deduction applied on the second unexcused tardiness occurrence.",
          },
          {
            amount: "$25.00",
            description: "Tardiness — 3rd Offense & Beyond",
            notes: "$25.00 deduction applied per occurrence from the 3rd offense onward.",
          },
          {
            amount: "Warning",
            description: "Unexcused Absence — 1st Occurrence",
            notes: "Verbal warning issued. No financial deduction on first occurrence.",
          },
          {
            amount: "$50.00",
            description: "Unexcused Absence — 2nd Occurrence",
            notes: "$50.00 deduction applied on the second unexcused absence.",
          },
          {
            amount: "$100.00",
            description: "Unexcused Absence — 3rd Occurrence & Beyond",
            notes: "$100.00 deduction applied per occurrence from the 3rd unexcused absence onward. Consistent issues may result in formal review or termination.",
          },
          {
            amount: "Warning",
            description: "Failure to Submit Practice Plan — 1st & 2nd Miss (per month)",
            notes: "Each coach receives up to 2 warnings per calendar month for missed practice plan submissions. No financial deduction on the 1st or 2nd miss.",
          },
          {
            amount: "$10.00",
            description: "Failure to Submit Practice Plan — 3rd Miss & Beyond (per month)",
            notes: "$10.00 deduction applied for each missed submission after the 2nd warning within the same calendar month.",
          },
          {
            amount: "Warning",
            description: "Failure to Submit End of Day Report — 1st & 2nd Miss (per month)",
            notes: "Each coach receives up to 2 warnings per calendar month for missed EOD report submissions. No financial deduction on the 1st or 2nd miss.",
          },
          {
            amount: "$10.00",
            description: "Failure to Submit End of Day Report — 3rd Miss & Beyond (per month)",
            notes: "$10.00 deduction applied for each missed EOD report after the 2nd warning within the same calendar month.",
          },
          {
            amount: "Warning",
            description: "Missed Benchmarks — 1st Occurrence",
            notes: "A formal warning is issued. The coach must submit the missed benchmark by the very next scheduled practice. If not submitted by then, the $50.00 fee is immediately assessed.",
          },
          {
            amount: "$50.00",
            description: "Missed Benchmarks — Failure to Cure or Repeat Occurrence",
            notes: "$50.00 deduction applied if the benchmark is not submitted by the next scheduled practice after the warning, or for any subsequent missed benchmark occurrence.",
          },
        ],
      },
      {
        type: "section_label",
        text: "11.2  BONUS SCHEDULE",
      },
      {
        type: "bonus_table",
        rows: [
          {
            amount: "$100.00",
            description: "Major National Championship Bonus",
            notes: "Awarded for winning a major national title. To qualify, the win cannot be uncontested — competition must be present in the division.",
          },
          {
            amount: "$250.00 ⚑",
            description: "The Summit Bonus (PENDING FINAL APPROVAL)",
            notes: "⚑ UNDER DISCUSSION — amount and qualification criteria not yet finalized. Do not communicate to staff until confirmed.",
          },
          {
            amount: "$50.00",
            description: "Bid Bonus — Wildcard / At-Large",
            notes: "Base bid bonus awarded for earning a Wildcard or At-Large bid. Bids cannot be handed down — they must be earned through competition.",
          },
          {
            amount: "+$25.00",
            description: "Bid Bonus — Partial Paid (Upgrade)",
            notes: "Additional $25 awarded when the bid is upgraded to a Partial Paid bid. Stacks with the base $50 Wildcard/At-Large bonus. Total: $75.",
          },
          {
            amount: "+$25.00",
            description: "Bid Bonus — Full Paid (Upgrade)",
            notes: "Additional $25 awarded when the bid is further upgraded to a Full Paid bid. Stacks with all prior bid bonuses. Total potential: $100.",
          },
          {
            amount: "$150.00",
            description: "Retention Rate Bonus",
            notes: "Awarded per coach who meets or exceeds an 85% athlete retention rate at end of season. Retention is calculated based on returning athletes from the prior season. Coach must meet the 85% threshold to qualify — no exceptions.",
          },
        ],
      },
      {
        type: "section_label",
        text: "11.3  BONUS QUALIFICATION RULES",
      },
      {
        type: "bullet",
        items: [
          "All bid bonuses require that the bid was earned through competition — bids that are handed down or awarded without competition do not qualify.",
          "All championship bonuses require that the division was contested — uncontested wins do not qualify for any bonus.",
          "Coaches must be in good standing (no active disciplinary actions) to qualify for any bonus.",
          "Bonuses are paid at the end of the competitive season following final accounting.",
          "Disputes regarding bonus qualifications must be submitted in writing to the All-Star Director within 7 days of the competition.",
        ],
      },
    ],
  },
  {
    num: "12",
    title: "SEASONAL BENCHMARKS",
    sub: "Season Timeline, Performance Expectations & Accountability",
    content: [
      {
        type: "italic_intro",
        text: "In order for a coaching position at Rio Elite to exist, the following benchmarks must be met each season. These milestones are not suggestions — they are the minimum performance standards expected of every team coach. Missing milestones without documented justification will result in a $50.00 deduction per occurrence.",
      },
      {
        type: "link",
        label: "View the Full Interactive Season Roadmap",
        url: "https://cheerroadmap-h889m6ur.manus.space",
      },
      {
        type: "section_label",
        text: "12.1  SEASON BENCHMARK TIMELINE",
      },
      {
        type: "bullet",
        items: [
          "EARLY SEASON — Skill Identification: All tumbling and stunt elements for the season must be identified. Coaches are not to settle for the bare minimum requirements of the scoresheet. Work toward maximization of the team's potential.",
          "MID-SEASON — Routine Completion (Minus Pyramid): The full routine, excluding the pyramid, must be complete and running by the established mid-season checkpoint.",
          "MID-SEASON WINDOW — Full-Out Through Pyramid: Teams must begin going full-out through the pyramid section during the mid-season window as outlined in the Season Roadmap.",
          "LATE MID-SEASON — Pyramid Completion: The full pyramid must be complete and incorporated into the routine by the late mid-season checkpoint.",
          "LATE MID-SEASON FORWARD — Full-Out Including Pyramid: Teams must begin going full-out including the pyramid from the late mid-season checkpoint forward.",
          "PRE-COMPETITION SEASON — 100% Full-Outs: Teams must be going full-out no less than twice per practice from the pre-competition checkpoint through the end of the competitive season.",
        ],
      },
      {
        type: "section_label",
        text: "12.2  ONGOING PERFORMANCE BENCHMARKS",
      },
      {
        type: "body",
        text: "In addition to the seasonal benchmarks above, the following ongoing benchmarks apply throughout the season:",
      },
      {
        type: "bullet",
        items: [
          "Measurable skill improvement must be demonstrated by your team throughout the year.",
          "Reasonable end-of-year retention rate, which must not fall below 75%.",
          "Consistent execution of all non-negotiable practice systems (H.I.I.T., stretch, tumbling drills, jump system).",
          "Timely submission of all practice plans and EOD reports.",
          "Active and professional parent communication.",
          "Attendance at all staff meetings and program events.",
        ],
      },
      {
        type: "section_label",
        text: "12.3  BENCHMARK ACCOUNTABILITY",
      },
      {
        type: "body",
        text: "Coaches who consistently miss benchmarks will be subject to a formal performance review. The All Star Director will meet with the coach to identify barriers, create an improvement plan, and establish a timeline for correction. Continued failure to meet benchmarks after a performance review may result in reassignment, suspension, or termination.",
      },
    ],
  },
  {
    num: "13",
    title: "INJURY REPORTING PROCEDURES",
    sub: "Mandatory Reporting, Documentation & Follow-Up Protocol",
    content: [
      {
        type: "italic_intro",
        text: "All injuries, regardless of severity, must be reported and documented. Failure to report an injury is a serious violation of program policy and may expose both the coach and the program to significant liability.",
      },
      {
        type: "section_label",
        text: "13.1  IMMEDIATE RESPONSE PROTOCOL",
      },
      {
        type: "steps",
        items: [
          {
            title: "Stop Practice",
            desc: "Immediately stop the activity and secure the area. Do not allow other athletes to continue in the immediate vicinity of the injured athlete.",
          },
          {
            title: "Assess the Athlete",
            desc: "Assess the athlete's condition. If there is any possibility of a serious injury (head, neck, spine, loss of consciousness), do not move the athlete — call 911 immediately.",
          },
          {
            title: "Notify Parents/Guardians",
            desc: "Contact the athlete's parent or guardian immediately. Do not minimize the injury or delay notification.",
          },
          {
            title: "Notify the All Star Director",
            desc: "Contact the All Star Director immediately following any injury, regardless of severity.",
          },
          {
            title: "Complete the Injury Report Form",
            desc: "Complete the official Rio Elite Injury Report Form in full before the end of the practice session.",
          },
          {
            title: "Document in EOD Report",
            desc: "All injuries must be documented in the End of Day Report for that practice.",
          },
          {
            title: "Follow Up",
            desc: "Check in with the athlete and their family the following day. Document the follow-up in your next EOD report.",
          },
        ],
      },
      {
        type: "section_label",
        text: "13.2  CONCUSSION PROTOCOL",
      },
      {
        type: "body",
        text: "Any athlete who exhibits signs of a concussion must be immediately removed from participation. Signs include: headache, dizziness, confusion, nausea, sensitivity to light or noise, or any loss of consciousness. An athlete who has been removed for a suspected concussion may NOT return to participation without written medical clearance from a licensed healthcare provider.",
      },
      {
        type: "section_label",
        text: "13.3  INJURY REPORT FORM — REQUIRED INFORMATION",
      },
      {
        type: "bullet",
        items: [
          "Athlete's full name, age, and date of birth.",
          "Date, time, and location of the injury.",
          "Description of the activity being performed at the time of injury.",
          "Detailed description of how the injury occurred.",
          "Description of the injury (body part, nature of injury).",
          "Names of all witnesses present.",
          "Immediate actions taken by the coach.",
          "Whether EMS was called and/or athlete was transported for medical care.",
          "Parent/guardian notification — time and method of contact.",
          "Coach signature and date.",
        ],
      },
    ],
  },
  {
    num: "14",
    title: "CELL PHONE POLICY",
    sub: "Usage Standards, Violations & Photography Guidelines",
    content: [
      {
        type: "section_label",
        text: "14.1  COACH CELL PHONE USAGE",
      },
      {
        type: "body",
        text: "Cell phones are a significant distraction in the coaching environment. The following policy applies to all coaches during practice sessions and program events:",
      },
      {
        type: "bullet",
        items: [
          "Cell phones must be put away during active coaching time. Coaches may not scroll social media, send personal texts, or make personal calls during practice.",
          "Cell phones may be used for practice-related purposes only — playing music, accessing practice plans, or communicating with program leadership.",
          "PENALTY: Cell phone misuse during practice = $5.00 per hour dock from pay.",
          "Coaches who are found to be consistently distracted by cell phones will be subject to a formal performance review.",
        ],
      },
      {
        type: "section_label",
        text: "14.2  ATHLETE CELL PHONE POLICY",
      },
      {
        type: "bullet",
        items: [
          "Athletes are not permitted to have cell phones on the practice floor during active practice time.",
          "Cell phones must be stored in bags or designated areas during practice.",
          "Coaches are responsible for enforcing the athlete cell phone policy consistently.",
          "Exceptions may be made for medical necessity — coaches must be notified in advance.",
        ],
      },
      {
        type: "section_label",
        text: "14.3  PHOTOGRAPHY & VIDEO STANDARDS",
      },
      {
        type: "bullet",
        items: [
          "Coaches may take photos and videos of athletes for coaching and program purposes only.",
          "Photos and videos of minors may NOT be posted to personal social media accounts without written parental consent.",
          "All program photography and video must be posted through official Rio Elite channels only.",
          "Coaches must never photograph or video athletes in changing areas, restrooms, or any private setting.",
          "Any misuse of photography or video involving minors will result in immediate termination and may be reported to law enforcement.",
        ],
      },
    ],
  },
  {
    num: "15",
    title: "SOCIAL MEDIA POLICY",
    sub: "Standards, Posting Guidelines & Violations",
    content: [
      {
        type: "section_label",
        text: "15.1  GENERAL SOCIAL MEDIA STANDARDS",
      },
      {
        type: "body",
        text: "As a Rio Elite coach, your social media presence is an extension of your professional identity. Everything you post publicly reflects on the program. The following standards apply to all personal and professional social media activity:",
      },
      {
        type: "bullet",
        items: [
          "Coaches must conduct themselves professionally on all social media platforms.",
          "Negative comments about athletes, parents, other coaches, or competing programs are strictly prohibited.",
          "Coaches may not post confidential program information, competition strategies, or internal communications.",
          "Coaches may not post content that is discriminatory, harassing, sexually explicit, or otherwise inappropriate.",
          "Coaches must not use social media to communicate privately with athletes under the age of 18.",
          "Violations of the social media policy may result in disciplinary action up to and including termination.",
        ],
      },
      {
        type: "section_label",
        text: "15.2  POSTING MINORS",
      },
      {
        type: "bullet",
        items: [
          "Written parental consent is required before posting any photo or video of a minor athlete on any platform.",
          "Consent forms are available from the All Star Director and must be on file before any posting.",
          "When in doubt, do not post. Always err on the side of caution when it comes to images of minors.",
          "Tag restrictions: Do not tag minors in posts without explicit parental permission.",
        ],
      },
      {
        type: "section_label",
        text: "15.3  PROGRAM SOCIAL MEDIA ASSIGNMENTS",
      },
      {
        type: "body",
        text: "Coaches may be assigned to contribute content to official Rio Elite social media channels. When contributing to official channels, coaches must follow all program branding guidelines and obtain approval from leadership before posting.",
      },
    ],
  },
  {
    num: "16",
    title: "SEXUAL ABUSE & MISCONDUCT PREVENTION",
    sub: "Zero Tolerance Policy, Mandatory Reporting & Safe Sport",
    content: [
      {
        type: "section_label",
        text: "16.1  ZERO TOLERANCE POLICY",
      },
      {
        type: "body",
        text: "Rio Elite maintains a strict zero tolerance policy for any form of sexual abuse, sexual misconduct, or inappropriate physical contact involving athletes. This policy applies to all coaches, staff members, volunteers, and any adult in a position of authority within the program.",
      },
      {
        type: "bullet",
        items: [
          "Any form of sexual abuse, exploitation, or misconduct involving a minor is a criminal offense and will be reported to law enforcement immediately.",
          "Inappropriate physical contact of any kind — including contact that may appear innocent — is prohibited.",
          "Coaches must never be alone in a closed space with a single athlete.",
          "Coaches must never transport an athlete alone in a vehicle without written parental consent and All-Star Director approval.",
          "Any romantic or sexual relationship between a coach and an athlete is strictly prohibited, regardless of the athlete's age.",
        ],
      },
      {
        type: "section_label",
        text: "16.2  MANDATORY REPORTING OBLIGATIONS",
      },
      {
        type: "body",
        text: "All Rio Elite coaches are mandatory reporters. This means that if you have reasonable suspicion that a child is being abused — physically, sexually, emotionally, or through neglect — you are legally required to report it. This obligation exists regardless of who the alleged abuser is.",
      },
      {
        type: "bullet",
        items: [
          "Report immediately to the All-Star Director AND to the appropriate child protective services agency.",
          "Do not investigate the allegation yourself — your role is to report, not investigate.",
          "Do not confront the alleged abuser.",
          "Do not promise confidentiality to the child — explain that you are required to report.",
          "Document everything you observed or were told in writing.",
          "Failure to report suspected child abuse is a criminal offense in the state of Florida.",
        ],
      },
      {
        type: "section_label",
        text: "16.3  SAFE SPORT GUIDELINES",
      },
      {
        type: "bullet",
        items: [
          "All coaches must complete Safe Sport training as required by program policy.",
          "One-on-one interactions between coaches and athletes must occur in observable and interruptible settings.",
          "Electronic communications with athletes must be transparent — parents should be copied on all direct communications with minor athletes.",
          "Any coach who is the subject of a sexual misconduct allegation will be immediately suspended pending investigation.",
          "Retaliation against anyone who reports suspected abuse or misconduct is strictly prohibited and will result in immediate termination.",
        ],
      },
    ],
  },
  {
    num: "17",
    title: "SEXUAL HARASSMENT POLICY",
    sub: "Definition, Prohibited Conduct & Reporting Procedure",
    content: [
      {
        type: "section_label",
        text: "17.1  POLICY STATEMENT",
      },
      {
        type: "body",
        text: "Rio Elite is committed to providing a work and training environment free from sexual harassment. Sexual harassment in any form will not be tolerated and will result in disciplinary action up to and including immediate termination.",
      },
      {
        type: "section_label",
        text: "17.2  DEFINITION OF SEXUAL HARASSMENT",
      },
      {
        type: "body",
        text: "Sexual harassment includes any unwelcome sexual advances, requests for sexual favors, or other verbal, visual, or physical conduct of a sexual nature when:",
      },
      {
        type: "bullet",
        items: [
          "Submission to such conduct is made a condition of employment or participation.",
          "Submission to or rejection of such conduct is used as the basis for decisions affecting employment or participation.",
          "Such conduct has the purpose or effect of unreasonably interfering with an individual's work or participation, or creating an intimidating, hostile, or offensive environment.",
        ],
      },
      {
        type: "section_label",
        text: "17.3  PROHIBITED CONDUCT",
      },
      {
        type: "bullet",
        items: [
          "Unwanted physical contact of a sexual nature.",
          "Sexual comments, jokes, or innuendo.",
          "Displaying sexually explicit materials.",
          "Sending sexually explicit messages, emails, or social media communications.",
          "Making sexual propositions or advances.",
          "Commenting on an individual's body or appearance in a sexual manner.",
          "Any other conduct of a sexual nature that creates a hostile or offensive environment.",
        ],
      },
      {
        type: "section_label",
        text: "17.4  REPORTING PROCEDURE",
      },
      {
        type: "steps",
        items: [
          {
            title: "Report to the All Star Director",
            desc: "Any coach who experiences or witnesses sexual harassment must report it to the All Star Director/Program Director/Owners immediately.",
          },
          {
            title: "If the ASD is Involved",
            desc: "If the All Star Director is the subject of the complaint, report directly to program ownership.",
          },
          {
            title: "Written Documentation",
            desc: "Provide a written account of the incident(s), including dates, times, locations, witnesses, and a description of what occurred.",
          },
          {
            title: "Investigation",
            desc: "All complaints will be investigated promptly and confidentially. Both parties will have the opportunity to present their account.",
          },
          {
            title: "Resolution",
            desc: "Appropriate disciplinary action will be taken based on the findings of the investigation. Retaliation against anyone who reports harassment is strictly prohibited.",
          },
        ],
      },
    ],
  },
  {
    num: "18",
    title: "ANTI-DISCRIMINATION POLICY",
    sub: "Equal Treatment, Protected Classes & Inclusion",
    content: [
      {
        type: "section_label",
        text: "18.1  NON-DISCRIMINATION STATEMENT",
      },
      {
        type: "body",
        text: "Rio Elite is committed to providing equal opportunity and treatment for all coaches, staff, and athletes regardless of race, color, religion, national origin, sex, gender identity, sexual orientation, age, disability, or any other characteristic protected by applicable law.",
      },
      {
        type: "section_label",
        text: "18.2  PROHIBITED CONDUCT",
      },
      {
        type: "bullet",
        items: [
          "Discrimination in hiring, assignment, compensation, or termination based on any protected characteristic.",
          "Harassment or hostile treatment based on any protected characteristic.",
          "Making derogatory comments, jokes, or remarks about any protected group.",
          "Treating athletes differently based on race, religion, gender, sexual orientation, or any other protected characteristic.",
          "Retaliating against anyone who reports discrimination or participates in an investigation.",
        ],
      },
      {
        type: "section_label",
        text: "18.3  INCLUSION COMMITMENT",
      },
      {
        type: "body",
        text: "Rio Elite is committed to building an inclusive program where every athlete and coach feels valued, respected, and supported. Coaches are expected to actively model inclusive behavior and to address any discriminatory conduct they observe immediately.",
      },
    ],
  },
  {
    num: "19",
    title: "NON-DISCLOSURE & CONFIDENTIALITY",
    sub: "Confidential Information, Obligations & Consequences",
    content: [
      {
        type: "section_label",
        text: "19.1  CONFIDENTIAL INFORMATION",
      },
      {
        type: "body",
        text: "During your employment with Rio Elite, you will have access to confidential and proprietary information. This information must be protected and may not be disclosed to any third party without written authorization from program leadership.",
      },
      {
        type: "bullet",
        items: [
          "Athlete personal information, including names, addresses, medical information, and family details.",
          "Program financial information, including compensation structures, tuition rates, and revenue data.",
          "Competition strategies, choreography, and routine details.",
          "Proprietary coaching systems, training methodologies, and program materials.",
          "Internal communications, personnel matters, and disciplinary actions.",
          "Any information designated as confidential by program leadership.",
        ],
      },
      {
        type: "section_label",
        text: "19.2  CONFIDENTIALITY OBLIGATIONS",
      },
      {
        type: "bullet",
        items: [
          "Confidentiality obligations begin on your first day of employment and continue after your employment ends.",
          "You may not use confidential information for personal gain or to benefit any competing program.",
          "You may not share confidential information with former colleagues, competing programs, or any unauthorized party.",
          "Violations of the confidentiality agreement may result in legal action under the Florida Uniform Trade Secrets Act.",
        ],
      },
    ],
  },
  {
    num: "20",
    title: "PRIVATE LESSON POLICY",
    sub: "Authorization, Rates, Scheduling & Eligibility",
    content: [
      {
        type: "section_label",
        text: "20.1  AUTHORIZATION REQUIREMENTS",
      },
      {
        type: "body",
        text: "Private lessons are a privilege, not a right, and must be authorized by program leadership before being offered or conducted. The following requirements apply to all private lesson activity:",
      },
      {
        type: "bullet",
        items: [
        
          "Coaches may only offer private lessons to athletes currently enrolled in the Rio Elite program.",
          "Private lessons must be conducted at a Rio Elite facility during approved hours.",
          "Coaches may not conduct private lessons at competing facilities or in private residences.",
          "All private lesson fees must be processed through the official Rio Elite payment system — no cash transactions.",
        ],
      },
      {
        type: "section_label",
        text: "20.2  RATES & COMPENSATION",
      },
      {
        type: "bullet",
        items: [
          "Private lesson rates are set by program leadership and must be followed without exception.",
          "Coaches may not set their own rates or offer discounts without written authorization.",
          "Coach compensation for private lessons will be paid according to the schedule outlined in the position agreement.",
          "All private lesson revenue must be reported and processed through program accounting.",
        ],
      },
      {
        type: "section_label",
        text: "20.3  CONDUCT & VIOLATIONS",
      },
      {
        type: "bullet",
        items: [
          "All Safe Sport and professional conduct standards apply during private lessons.",
          "One-on-one private lessons with minor athletes must be conducted in observable settings with a parent or guardian present or in view.",
          "Coaches may not use private lessons to recruit athletes to competing programs.",
          "Unauthorized private lessons or violations of this policy will result in disciplinary action up to and including termination.",
        ],
      },
    ],
  },
  {
    num: "21",
    title: "EMPLOYMENT TERMINATION",
    sub: "Types of Termination, At-Will Employment & Return of Property",
    content: [
      {
        type: "section_label",
        text: "21.1  AT-WILL EMPLOYMENT",
      },
      {
        type: "body",
        text: "All Rio Elite coaching positions are at-will employment. This means that either the coach or the program may terminate the employment relationship at any time, with or without cause, and with or without notice, subject to applicable law.",
      },
      {
        type: "section_label",
        text: "21.2  GROUNDS FOR IMMEDIATE TERMINATION",
      },
      {
        type: "body",
        text: "The following actions will result in immediate termination without warning or severance:",
      },
      {
        type: "bullet",
        items: [
          "Any form of sexual abuse, misconduct, or inappropriate contact with a minor.",
          "Failure to report suspected child abuse as required by mandatory reporting laws.",
          "Theft, fraud, or misappropriation of program funds or property.",
          "Physical assault or threatening behavior toward athletes, parents, or colleagues.",
          "Violation of the confidentiality agreement resulting in material harm to the program.",
          "Conduct that brings significant reputational harm to Rio Elite.",
          "Unauthorized private lessons or solicitation of athletes for competing programs.",
          "Any criminal conviction that affects the coach's ability to work with minors.",
        ],
      },
      {
        type: "section_label",
        text: "21.3  RETURN OF PROPERTY",
      },
      {
        type: "body",
        text: "Upon termination of employment for any reason, the coach must immediately return all Rio Elite property, including but not limited to: program materials, uniforms, equipment, access credentials, and any confidential documents. Failure to return program property may result in legal action.",
      },
    ],
  },
  {
    num: "22",
    title: "ACKNOWLEDGMENT & SIGNATURE",
    sub: "Staff Acknowledgment of Receipt and Understanding",
    content: [
      {
        type: "body",
        text: "By signing below, I acknowledge that I have received, read, and understood the Rio Elite Staff Operations Manual. I agree to comply with all policies, procedures, and standards outlined in this manual. I understand that failure to comply with these standards may result in disciplinary action up to and including termination of employment.",
      },
      {
        type: "body",
        text: "I understand that this manual may be updated from time to time and that I am responsible for staying current with any updates communicated by program leadership.",
      },
      {
        type: "body",
        text: "I understand that this manual does not constitute a contract of employment and that my employment remains at-will.",
      },
    ],
  },
];

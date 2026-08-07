import { useState } from "react";

import { motion } from "framer-motion";

import {

  MessageCircle,

  Smile,

  Building,

  Radio,

  Shield,

  Home,

  ClipboardCheck,

  GraduationCap,

  ChevronRight,

} from "lucide-react";

import {

  Dialog,

  DialogContent,

  DialogHeader,

  DialogTitle,

  DialogDescription,

} from "@/components/ui/dialog";



const programs = [

  {

    icon: MessageCircle,

    title: "Community Dialogue",

    shortDesc:

      "Create safe spaces where men openly discuss stress, depression, anxiety, relationships, substance use and positive coping strategies.",

    fullDesc:

      "Community Dialogue creates safe spaces where men openly discuss stress, depression, anxiety, relationships, substance use and positive coping strategies. Through facilitated group conversations, participants build trust, share experiences and develop practical tools for everyday wellbeing.",

    focus: "Open conversation, peer support, coping strategies",

  },

  {

    icon: Smile,

    title: "Youth Mental Health",

    shortDesc:

      "Helping young people develop emotional resilience before crisis occurs.",

    fullDesc:

      "Youth Mental Health helps young people develop emotional resilience before crisis occurs. We work in schools, youth groups and community centres to teach emotional regulation, healthy communication, stress management and help-seeking skills.",

    focus: "Early resilience, schools, young adults",

  },

  {

    icon: Building,

    title: "Prison Outreach",

    shortDesc:

      "Restore hope, emotional wellbeing and dignity among incarcerated men through mental health education, support and reintegration preparation.",

    fullDesc:

      "Prison Outreach restores hope, emotional wellbeing and dignity among incarcerated men through mental health education, emotional support, rehabilitation and preparation for successful reintegration into society. We recognise that many incarcerated men carry unresolved trauma, addiction, grief, depression and anxiety that often existed long before imprisonment.",

    focus: "Incarcerated men, trauma, reintegration",

  },

  {

    icon: Radio,

    title: "Media Advocacy",

    shortDesc:

      "Normalize conversations around mental health using radio, television, newspapers and digital media to educate communities.",

    fullDesc:

      "Media Advocacy normalizes conversations around mental health by using radio, television, newspapers and digital media to educate communities. This program reaches people who may never attend a dialogue session, breaking stigma at scale.",

    focus: "Radio, TV, print, digital campaigns",

  },

  {

    icon: Shield,

    title: "Gender Based Violence Prevention",

    shortDesc:

      "Prevent GBV by helping boys and men build healthy relationships, emotional regulation and non-violent conflict resolution.",

    fullDesc:

      "Gender Based Violence Prevention prevents GBV by helping boys and men build healthy relationships, emotional regulation, non-violent conflict resolution and shared community responsibility. We engage men and boys as positive partners in creating safe homes and communities.",

    focus: "Healthy masculinity, accountability, community safety",

  },

  {

    icon: Home,

    title: "Family Conversations",

    shortDesc:

      "Strengthen communication, emotional understanding and healthy relationships within families.",

    fullDesc:

      "Family Conversations strengthens communication, emotional understanding and healthy relationships within families. We facilitate sessions that help family members express needs, resolve conflict and support each other's mental health.",

    focus: "Family dynamics, communication, relationships",

  },

  {

    icon: ClipboardCheck,

    title: "Mental Health Screening",

    shortDesc:

      "Identify emotional distress early and connect individuals to appropriate support before problems become severe.",

    fullDesc:

      "Mental Health Screening identifies emotional distress early and connects individuals to appropriate support before problems become severe. We use simple, culturally sensitive screening tools and referral pathways to ensure no one falls through the cracks.",

    focus: "Early identification, referral, follow-up",

  },

  {

    icon: GraduationCap,

    title: "Men Matter Leadership Academy",

    shortDesc:

      "Develop competent, ethical and compassionate community mental health leaders who can implement the Men Matter model.",

    fullDesc:

      "The Men Matter Leadership Academy develops competent, ethical and compassionate community mental health leaders who can safely implement the Men Matter model. Trainees gain facilitation skills, mental health literacy, safeguarding knowledge and program management tools.",

    focus: "Leadership, facilitation, safeguarding, scale",

  },

];



const ProgramsSection = () => {

  const [selectedProgram, setSelectedProgram] = useState<null | (typeof programs)[0]>(null);



  return (

    <section id="programs" className="py-16 bg-background">

      <div className="container px-4">

        <motion.h2

          className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-6"

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.5 }}

        >

          Our Programs

        </motion.h2>



        <motion.p

          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ delay: 0.1, duration: 0.5 }}

        >

          Click a program to learn more and join the dialogue in your community.

        </motion.p>



        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {programs.map((program, i) => (

            <motion.button

              key={program.title}

              onClick={() => setSelectedProgram(program)}

              className="group text-left bg-card rounded-xl p-6 border border-border hover:border-primary/60 card-hover shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: i * 0.05, duration: 0.5 }}

            >

              <div className="w-12 h-12 rounded-lg gradient-green flex items-center justify-center mb-4">

                <program.icon size={24} className="text-primary-foreground" />

              </div>

              <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">

                {program.title}

              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">

                {program.shortDesc}

              </p>

              <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">

                Learn more <ChevronRight size={16} className="ml-1" />

              </span>

            </motion.button>

          ))}

        </div>

      </div>



      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>

        <DialogContent className="sm:max-w-lg">

          {selectedProgram && (

            <>

              <DialogHeader>

                <div className="flex items-center gap-3 mb-2">

                  <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center">

                    <selectedProgram.icon size={20} className="text-primary-foreground" />

                  </div>

                  <DialogTitle className="font-heading text-xl">

                    {selectedProgram.title}

                  </DialogTitle>

                </div>

                <DialogDescription className="text-muted-foreground">

                  {selectedProgram.fullDesc}

                </DialogDescription>

              </DialogHeader>

              <div className="mt-4">

                <p className="text-sm font-semibold text-foreground mb-2">Focus areas:</p>

                <p className="text-sm text-muted-foreground">{selectedProgram.focus}</p>

              </div>

              <div className="mt-6">

                <a

                  href="/contact"

                  onClick={() => setSelectedProgram(null)}

                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-heading font-bold text-sm tracking-wider gradient-green text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"

                >

                  Join the dialogue

                </a>

              </div>

            </>

          )}

        </DialogContent>

      </Dialog>

    </section>

  );

};



export default ProgramsSection; 


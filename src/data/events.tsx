import { JSX } from "react";

export interface Events {
  id: number;
  description: string;
  title: string;
  reg_fees: string;
  src: string;
  ctaText: string;
  non_mace_link: string;
  mace_link: string;
  content: () => JSX.Element;
}

export const singleEvents:Events[] = [
  {
    id: 1,
    description: "6K Prize Pool",
    title: "മോഹിനിയാട്ടം",
    reg_fees: "Rs. 150/-",
    src: "/Arang/Individual/mohiniyattam.jpg",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/VSXVxmp96D1TPYqf6",
    mace_link: "https://forms.gle/yBbWauXVdhifWtD9A",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Each participant will be allowed up to 15 minutes including time for preparation, exit etc. (10 minutes for performance and 5 minutes for stage preparation)</li>
          <li>Judgment will be based basically on the qualities like Tal, Technique, Rhythm, Abhinaya or expression, costume, footwork, general impression etc.</li>
          <li>Participants should submit audio as CD/Pendrive/Phone with AUX output to the event coordinators before starting of the event.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 2,
    description: "6K Prize Pool",
    title: "ഭരതനാട്യം",
    reg_fees: "Rs. 150/-",
    src: "/Arang/Individual/bharathanatyam.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/jYpg2zFjZVYrPY2W6",
    mace_link: "https://forms.gle/8fVjJZ8q8p9os8ERA",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Each participant will be allowed up to 15 minutes including time for preparation, exit etc. (10 minutes for performance and 5 minutes for stage preparation)</li>
          <li>Judgment will be based basically on the qualities like Tal, Technique, Rhythm, Abhinaya or expression, costume, footwork, general impression etc.</li>
          <li>Participants should submit audio as CD/Pendrive/Phone with AUX output to the event coordinators before starting of the event.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },

  {
    id: 3,
    description: "1K Prize Pool",
    title: "Extempore - Malayalam",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/extempore_malayalam.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/5NUKHtjPskQwNNbs7",
    mace_link: "https://forms.gle/rV12n97xfdtQXKQh8",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The extempore should contain Malayalam language only.</li>
          <li>Topic will be given only 5 minutes before the commencement of the competition.</li>
          <li>Maximum time allotted for the performance is 5 minutes.</li>
          <li>Participants will not be allowed to take any paper or material with them during the speech.</li>
          <li>Judgment will be based on content, clear organization, pronunciation, enunciation and diction, stage presence (eye contact, poise, personality).</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 4,
    description: "1K Prize Pool",
    title: "Extempore - English",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/extempore_english.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/VbymMvCCVwEdUqeRA",
    mace_link: "https://forms.gle/d4xJHBC5AU1KwKWB6",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The extempore should contain English language only.</li>
          <li>Topic will be given only 5 minutes before the commencement of the competition.</li>
          <li>Maximum time allotted for the performance is 5 minutes.</li>
          <li>Participants will not be allowed to take any paper or material with them during the speech.</li>
          <li>Judgment will be based on content, clear organization, pronunciation, enunciation and diction, stage presence (eye contact, poise, personality).</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 5,
    description: "6K Prize Pool",
    title: "കുച്ചിപ്പുടി",
    reg_fees: "Rs. 150/-",
    src: "/Arang/Individual/kuchipudi.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/TJSa8FA99wvU3Drx9",
    mace_link: "https://forms.gle/rHnFyfYu4Fc1CAN88",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Each participant will be allowed up to 15 minutes including time for preparation, exit etc. (10 minutes for performance and 5 minutes for stage preparation)</li>
          <li>Judgment will be based basically on the qualities like Tal, Technique, Rhythm, Abhinaya or expression, costume, footwork, general impression etc.</li>
          <li>Participants should submit audio as CD/Pendrive/Phone with AUX output to the event coordinators before the start of the event.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 6,
    description: "1K Prize Pool",
    title: "Light Music",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/light_music.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/P718Z1BZ6gfqJ8MHA",
    mace_link: "https://forms.gle/vH7L3awXz4DLVrTe9",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The participant can choose a meaningful Malayalam song of about 5 minutes duration.</li>
          <li>The song should not be devotional, choral, or from films.</li>
          <li>Songs that contain offensive mentions of caste, religion, and community or are wholly inappropriate will be rejected.</li>
          <li>Every participant should keep the proper time limit as given above.</li>
          <li>The judgment is based on expression, swaram, thalam, and overall performance.</li>
          <li>Actions or body movements on the stage will not be taken into consideration in judgment.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 7,
    description: "1K Prize Pool",
    title: "Carnatic Music / ശാസ്ത്രീയസംഗീതം",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/shastryasangeedham.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/Vd71U2PXiDWdT6HZ6",
    mace_link: "https://forms.gle/VVJW5ePcVMZqG9cHA",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The item can be presented in either Hindustani or Carnatic style.</li>
          <li>Film songs are not allowed under this item.</li>
          <li>Maximum time allotted for the performance is 10 minutes.</li>
          <li>Sufficient thought and care must be exercised in the choice of raga and composition.</li>
          <li>Judgment will be based on swara, tal, selection of raga, composition, and general impression.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 8,
    description: "1K Prize Pool",
    title: "Monoact",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/Mono_Act.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/eqPZFe36zoimYVSh6",
    mace_link: "https://forms.gle/CNJYBqv5BjiLvSue7",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Time allowed is 5 minutes.</li>
          <li>Judgment will be based on qualities like ability to act, clarity of language, literary expression, originality, humor, general impression, etc.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 9,
    description: "1K Prize Pool",
    title: "Anchoring",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/anchoring.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/hEUvszLRhvUx5ajQ9",
    mace_link: "https://forms.gle/JrEiXDrZxsGLM2vP7",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Maximum time allotted for the item is 10 minutes.</li>
          <li>You can prefer any language (English or Malayalam) according to your comfort.</li>
          <li>Topic will be given 10 minutes prior.</li>
          <li>Costume and appearance will be considered for judgment.</li>
          <li>You will be judged according to the costume and appearance, body language, fluency and repetition of words or phrases, confidence, and gestures.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 10,
    description: "1K Prize Pool",
    title: "Standup Comedy",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/stand_up_comedy.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/35EqqSgVKXxhXAwQ6",
    mace_link: "https://forms.gle/o48b9UmTa79Tc19x8",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>No participant can point out any individual or religion in any way, and any dual-meaning obscene content is strictly not allowed.</li>
          <li>Participants will be judged on the basis of content, fluency, spontaneity, presentation, and sense of humor.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 11,
    description: "1K Prize Pool",
    title: "Western Vocal Solo",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/western_solo.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/PDZPdCkvG73qGrrz5",
    mace_link: "https://forms.gle/W2SzwUKFAh4SX4ot5",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The competition is common to men and women participants.</li>
          <li>Time allotted for the item is not more than 5 minutes.</li>
          <li>Language of the song shall be only English.</li>
          <li>Judgment will be made on the qualities like composition, rhythm, coordination, and general impression, etc.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 12,
    description: "1K Prize Pool",
    title: "Recitation - English",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/Recitation-english.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/1NuDN2jACBEgUN4T9",
    mace_link: "https://forms.gle/ePnR8EGpERPPRCxG7",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Performance time limit will be 5 minutes.</li>
          <li>Participants are not allowed to refer to any notes or printed materials during the recitation of the memory verse.</li>
          <li>Poems containing language that is offensive, hurtful to any caste, creed, religion, or community, or wholly inappropriate, will be rejected.</li>
          <li>Judgment will be based on clarity of speech, expression of emotion and ideas, rhythm, tone, general impression, etc.</li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 13,
    description: "1K Prize Pool",
    title: "Recitation - Malayalam",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/recitation-malayalam.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/p6VV2rAi19sh46cEA",
    mace_link: "https://forms.gle/Nq6M8v3YUi2osij56",
    content: () => {
      return (
       <ul>
        <li>Participation is open for all engineering colleges.</li>
        <li>Performance time limit will be 5 minutes.</li>
        <li>Participants are not allowed to refer to any notes or printed materials during the recitation of the memory verse.</li>
        <li>Poems containing languages that are offensive, hurtful to any caste, creed, religion, or community, or wholly inappropriate, will be rejected.</li>
        <li>Judgment will be based on clarity of speech, expression of emotion and ideas, rhythm, tone, general impression, etc.</li>
        <li>The decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 14,
    description: "1K Prize Pool",
    title: "Mappilappattu",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/mappilapattu.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/sL8yFVoYhuRaT5gC6",
    mace_link: "https://forms.gle/DBnnSj5m4VCkdQSx8",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Competition is common for men and women participants.</li>
          <li>Duration: 5 minutes maximum.</li>
          <li>Evaluation will be based on Sruthilayam & rhythm, Bhavam, language & literary clarity.</li>
          <li>Film songs are not allowed for competition.</li>
          <li>Preference is given to traditional Mappila Pattu.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 15,
    description: "1K Prize Pool",
    title: "Drums Solo",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/drums.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/STCmT3qvAAbkSnS99",
    mace_link: "https://forms.gle/c5RES8XRQj1y7a2r5",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Individual event (no accompanists are allowed).</li>
          <li>Specified instrument for Percussion Western is Drums.</li>
          <li>Performance must be for a maximum of 5 minutes.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 16,
    description: "1K Prize Pool",
    title: "String Solo",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/string-solo.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/XNiL4ubCMxL5YBiN7",
    mace_link: "https://forms.gle/SsdnApPUoC5teAy2A",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>This is a solo event.</li>
          <li>Time Limit: 5 mins, any extensions in time will result in direct disqualification.</li>
          <li>Any stringed instrument shall be used for solo performance.</li>
          <li>Solos of famous songs can be played.</li>
          <li>Original composition shall be encouraged and given more weightage.</li>
          <li>A combination of riffs and solos can be played.</li>
          <li>Distortion is not allowed. No processing foot pedals.</li>
          <li>Judging criteria will be based on solo only.</li>
          <li>Judging Criteria:</li>
          <ul>
            <li>Tempo</li>
            <li>Clarity of Notes</li>
            <li>Difficulty of piece</li>
            <li>Dynamics</li>
          </ul>
          <li>Decision of judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 17,
    description: "1K Prize Pool",
    title: "Flute",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/flute.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/opD3wc1FfxAWViV57",
    mace_link: "https://forms.gle/bPUBv7oWAttXf4o88",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>This is a solo event.</li>
          <li>Time Limit: 5 minutes. Any extensions in time will result in direct disqualification.</li>
          <li>Solos of famous songs can be played.</li>
          <li>Original compositions shall be encouraged and given more weightage.</li>
          <li>A combination of riffs and solos can be played.</li>
          <li>Judging criteria will be based on the solo performance only:</li>
          <ul>
            <li>Tempo</li>
            <li>Clarity of Notes</li>
            <li>Difficulty of the piece</li>
            <li>Dynamics</li>
          </ul>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
];


export const groupEvents:Events[] = [
  {
    id: 1,
    description: "6K Prize Pool",
    title: "Group Dance Cinematic ",
    reg_fees: "Rs. 600/-",
    src: "/Arang/Group/group_dance.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/QFzkqJ9v4Tzvcuo66",
    mace_link: "https://forms.gle/TnEog1UuokCtgPCv8",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Group participants should be a minimum of 6 and a maximum of 12 participants.</li>
          <li>Duration of performance: 3 to 5 minutes. Exceeding the time may lead to disqualification.</li>
          <li>Cinema songs are allowed.</li>
          <li>Use of vulgar, sexually explicit, or violent language and/or lyrics is strictly prohibited.</li>
          <li>Only one participant from a team (lead) needs to register and provide the names of other participants to the event coordinators.</li>
          <li>Judgment is based on rhythm, formation, expression, costumes, make-up, sets, and the overall effect.</li>
          <li>Participants who do not meet the required guidelines will be disqualified.</li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 12,
    description: "8K Prize Pool",
    title: "Group Dance - Semi Classical",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/semiclassical_group.webp",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/5uh7AzGLkrDkRB3F9",
    mace_link: "https://forms.gle/4NwB9kC1gxoJ1Kc39",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum of 12 members are allowed per team.</li>
          <li>Time limit: 10 minutes, empty to empty.</li>
          <li>Props and costumes are allowed.</li>
          <li>Points will be awarded on the basis of overall performance, which includes acting skills, script, dialogue delivery, presentation, and other factors.</li>
          <li>Extra points shall be awarded for costumes.</li>
          <li>Characters can be from any number of movies. Scene elements from other movies can also be included.</li>
          <li>Character portrayal, twists, and humor carry additional weightage.</li>
          <li>Backstage narration (live/recorded) is allowed.</li>
          <li>Background music is permitted.</li>
          <li>Plagiarism of any sort will lead to immediate disqualification. Plagiarism includes skits taken from YouTube or any other sources from the Internet.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 2,
    description: "8K Prize Pool",
    title: "തിരുവാതിര",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/thiruvathira.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/nP485ufafbdXWZUj6",
    mace_link: "https://forms.gle/391Cobw12VxnwipKA",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is <strong>10</strong>.</li>
          <li>Each team can have a maximum of <strong>8 dancers</strong> and <strong>2 accompanists</strong> (including singers).</li>
          <li>The team must consist of <strong>only girls</strong>.</li>
          <li>The duration of the dance should not exceed <strong>10 minutes</strong>.</li>
          <li>Judgment will be based on:
              <ul>
                  <li>Rhythm</li>
                  <li>Formation</li>
                  <li>Expression</li>
                  <li>Costumes</li>
                  <li>Make-up</li>
                  <li>Sets</li>
                  <li>Overall effect</li>
              </ul>
          </li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },

  {
    id: 3,
    description: "8K Prize Pool",
    title: "ഒപ്പന",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/oppana1.webp",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/F132Z3xZy15c5afN8",
    mace_link: "https://forms.gle/58ayGfpdUAKyy7vF6",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is <strong>10</strong>.</li>
          <li>Each team can have a maximum of <strong>7 dancers</strong> (including the bride) and <strong>3 accompanists</strong> (including singers).</li>
          <li>The team should consist of <strong>only girls</strong>.</li>
          <li>The duration of the dance should not exceed <strong>10 minutes</strong>.</li>
          <li>Judgment will be based on: Rhythm, Formation, Expression, Costumes, Make-up, Sets, Overall effect</li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 4,
    description: "6K Prize Pool",
    title: "Sangagaanam",
    reg_fees: "Rs. 600/-",
    src: "/Arang/Group/group_song1.webp",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/nqhdwWfGKcGU86TEA",
    mace_link: "https://forms.gle/wHX1b2AAiuMJMWfJ7",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Group participants should be a minimum of 6 and a maximum of 12 participants.</li>
          <li>Duration of performance: 3 to 5 minutes. Exceeding the time may lead to disqualification.</li>
          <li>Cinema songs are allowed.</li>
          <li>Use of vulgar, sexually explicit, or violent language and/or lyrics is strictly prohibited.</li>
          <li>Only one participant from a team (lead) needs to register and provide the names of other participants to the event coordinators.</li>
          <li>Judgment is based on rhythm, formation, expression, costumes, make-up, sets, and overall effect.</li>
          <li>Participants who do not meet the required guidelines will be disqualified.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 5,
    description: "8K Prize Pool",
    title: "മാർഗ്ഗംകളി",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/margamkali.webp",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/daR9wCPdwt4nC3fu6",
    mace_link: "https://forms.gle/13gLLtRKpWG8KL4Y7",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants is 7, including 1 singer.</li>
          <li>Song and costume should be appropriate for Margamkali.</li>
          <li>No background music is allowed, and the traditional instrument for Margamkali may be used.</li>
          <li>Time allowed is 10 minutes.</li>
          <li>Judgment is based on rhythm, formation, set, costume, and overall effect.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 6,
    description: "6K Prize Pool",
    title: "നടൻപാട്ട്",
    reg_fees: "Rs. 600/-",
    src: "/Arang/Group/nadanpattu.webp",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/HZKvepAnsaBnrCTJ9",
    mace_link: "https://forms.gle/XxGjcquLikkkbgP38",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Duration should not exceed 10 minutes (Negative points for exceeding time).</li>
          <li>Maximum 8 participants.</li>
          <li>The tradition of the folk song must be revealed on the stage.</li>
          <li>The song should not contain any offensive, obscene, or disrespectful lyrics.</li>
          <li>Use of karaoke will not be entertained.</li>
          <li>Judgment will be based on rhythm, coordination, instruments, team spirit, outfit, and overall presentation.</li>
          <li>Decisions of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 7,
    description: "6K Prize Pool",
    title: "വഞ്ചിപ്പാട്ട്",
    reg_fees: "Rs. 600/-",
    src: "/Arang/Group/vanjipattu.jpg",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/oAVWeS1u6ibuxqLP9",
    mace_link: "https://forms.gle/JJpXiC7DWL5Fkz6FA",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>A maximum of 10 people can participate.</li>
          <li>Out of 10 people, one will be the &quot;Thaalakkaaran&quot; and one will be the lead singer (&quot;Thalappattu&quot;), while the remaining 8 people will be supporting singers.</li>
          <li>The performance can be in one of the following styles: Veppupattu, Kuttanadan style, or Aranmula style.</li>
          <li>When registering the team, the style in which the song will be presented must be specified in advance.</li>
          <li>Judgment will be based on rhythm, tune, synchronization with the singers, expression, outfit, and overall presentation.</li>
          <li>Decisions of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 8,
    description: "8K Prize Pool",
    title: "ദഫ് മുട്ട്",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/Duffmuttu.jpg",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/RYE7oMhpkAHV8Qf19",
    mace_link: "https://forms.gle/pU9WuDv2otNa44Qh6",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is Ten (10).</li>
          <li>Duration of the event should not be more than 10 minutes.</li>
          <li>The songs used for Duffmuttu should be &quot;Arabi Baith&quot;.</li>
          <li>Judgment will be based on the &quot;Baith&quot;, rhythm, percussion, and overall effect.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 9,
    description: "8K Prize Pool",
    title: "കോൽക്കളി",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/Kolkali.jpg",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/U7hcW4sy3RQHfZLL6",
    mace_link: "https://forms.gle/8UwWhzF3abkz88MC7",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is Twelve (12).</li>
          <li>Duration of the event should not be more than 10 minutes.</li>
          <li>The songs used for Kolkali should be melodious and traditional &quot;Mappilappattu&quot;.</li>
          <li>Judgment will be based on the originality of the song, rhythm, movements (Maithayam), formation, footwork, and overall effect.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 10,
    description: "6K Prize Pool",
    title: "Mime",
    reg_fees: "Rs. 600/-",
    src: "/Arang/Group/Mime.png",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/Qv8ggu89v8Ny5sYH6",
    mace_link: "https://forms.gle/dWrfYverej4zderG7",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Mime or Mookabhinayam is acting without words. It is an art that expresses through gestures, postures, and facial expressions. It portrays ideas, themes, or tells a story through physical movements only.</li>
          <li>Maximum number of 8 participants are allowed.</li>
          <li>Maximum time allotted for the performance is five (5) minutes.</li>
          <li>Judgment will be based on qualities like idea, creativity of presentation, use of make-up, costume, music, and general impression.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 11,
    description: "8K Prize Pool",
    title: "Spoof",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/spoof.jpg",
    ctaText: "Register",
    non_mace_link: "https://forms.gle/CG8oGUrWReHVNjwo9",
    mace_link: "https://forms.gle/FjKVsRkxcPYd8Z5k8",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum of 12 members are allowed per team.</li>
          <li>Time limit: 10 minutes, empty to empty.</li>
          <li>Props and costumes are allowed.</li>
          <li>Points will be awarded on the basis of overall performance, which includes acting skills, script, dialogue delivery, presentation, and other factors.</li>
          <li>Extra points shall be awarded for costumes.</li>
          <li>Characters can be from any number of movies. Scene elements from other movies can also be included.</li>
          <li>Character portrayal, twists, and humor carry additional weightage.</li>
          <li>Backstage narration (live/recorded) is allowed.</li>
          <li>Background music is permitted.</li>
          <li>Plagiarism of any sort will lead to immediate disqualification. Plagiarism includes skits taken from YouTube or any other sources from the Internet.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
];


export const main_events = [
  {
    event_name: "Arang",
    event_description: "Step into the vibrant world of Arangu, where art knows no bounds. This VIBRANT EXTRAVAGANZA celebrates the perfect blend of traditional and contemporary art forms. Imagine a rich tapestry of music, dance, theater, and visual arts, woven together to create an unforgettable experience. From classical performances that showcase our cultural heritage to modern masterpieces that push the boundaries of creativity, Arangu is a true celebration of artistic expression. Experience the magic of Arangu, where tradition and innovation converge. This spectacular event brings together the best of classical and contemporary art forms, creating a unique and unforgettable experience. Witness the timeless beauty of traditional music, dance, and theater, alongside modern masterpieces that showcase the latest trends and innovations. With its diverse range of performances and exhibitions, Arangu is a true celebration of artistic excellence and creativity.",
    event_image: "/images/sanskriti-white.png",
    event_link: "/arang"
  },
  {
    event_name: "Alai",
    event_description: "Step into the enchanting realm of Alai, where creativity flows like waves, blending diverse artistic expressions into a vibrant celebration. More than just an event, Alai is a source of artistic inspiration, featuring everything from mesmerizing paintings to captivating performances that push creative boundaries. The Alai Shows provide an intimate platform for talent, connecting emerging and seasoned artists while redefining artistic exploration. Adding to its unique charm, The Alai Flea—a seaside thrift market—offers a treasure trove of affordable finds, premium stalls, and delectable treats. Alai stands as a tribute to the beauty of art and thrift culture—join us to ride the waves of creativity and uncover hidden talents!",
    event_image: "/images/sanskriti-white.png",
  },
  {
    event_name: "ProShow",
    event_description: "Step into the Spotlight at Sanskriti’25 – A Symphony of Art At Sanskriti’25, Proshows weave music, dance, and storytelling into a breathtaking spectacle. Past, present, and future merge in an unforgettable celebration of creativity and passion. Experience soul-stirring melodies, mesmerizing dance, and electrifying performances that ignite the stage. Each act is a masterpiece, capturing the essence of artistic brilliance and boundless energy. More than just a show, the Proshows at Sanskriti’25 are a journey through rhythm, movement, and expression. Step into this dream where every beat and movement becomes art.",
    event_image: "/images/sanskriti-white.png",
  },
  {
    event_name: "Jalakam",
    event_description: "Sanskriti is a celebration of art, passion, and togetherness, and Jaalakam is where its purest form comes to life. A space where creativity knows no bounds, Jaalakam brings forth talents that inspire and stories that touch the heart. It is a tribute to those whose spirit and joy make them special from others. This year, as they step onto the stage of Sanskriti, they remind us that art is not just about talent but about connection, about seeing the beauty in every smile, every moment, and every soul.",
    event_image: "/images/sanskriti-white.png",
  },
  {
    event_name: "Drishyam",
    event_description: "Step into the world of cinema at Sanskriti'25, where Drishyam serves as a time capsule, preserving moments through the magic of film. From the nostalgia of monochrome classics to the vibrancy of contemporary storytelling and the possibilities of the future, Drishyam showcases the power of film to capture cultural snapshots across time. Watch as storytellers bridge generations, using black-and-white frames to honor the past, embrace the present, and envision the future. More than just a film festival, Drishyam is a living archive—an immersive journey through history, the present moment, and the endless possibilities ahead.",
    event_image: "/images/sanskriti-white.png",
  },
]
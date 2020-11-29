/**
 * The User that owns the pillars.
 */
export interface User {
  name: string;
  pillars: Pillar[];
}

/**
 * A demonstration of the extent to which one has achieved a goal. Stores all historical information about the goal
 * achievement as well.
 */
export interface Pillar {
  /** The name of the Pillar to work toward. */
  name: string;
  /** The description for how to complete a Submission for the pillar. */
  description: string;
  /** The color of the Pillar to display. */
  color: string;
  /** The special type of the Pillar, to handle differently in submissions/details. */
  type: string;
  /** The time the Pillar was created. */
  timeCreated: string;
  /**
   * The array of historical submissions done for the pillar. Should be SORTED backwards!
   *  Index 0 is the latest submission.
   *  */
  submissions: PillarSubmission[];
}

/**
 * A record for the submission of completion of a task to further a goal (Pillar).
 */
export interface PillarSubmission {
  /** The ISO string indicating when the Pillar submission was submitted. */
  time_submitted: string,
  /** The value from 0 - 1 indicating the level to which this submission indicates. */
  value: number,
}

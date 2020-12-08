import React from "react";
import "./styles.css";
import { useState } from "react";

const gitdb = {
  Git_Basics: [
    {
      command: "git init",
      meaning:
        "Create empty Git repo in specified directory. Run with no to initialize arguments to initialize the current directory as  a git repository"
    },
    {
      command: "git clone",
      meaning:
        "Clone repo located at <repo> onto local machine. Original repo can be located on the local filesystem or on a remote machine via HTTP or SSH"
    },
    {
      command: "git config",
      meaning:
        "Define author name to be used for all commits in current repo. Devs commonly use --global flag to set config options for current user."
    },
    {
      command: "git add",
      meaning:
        "Stage all changes in <directory> for the next commit.Replace <directory> with a <file> to change a specific file"
    },
    {
      command: "git status",
      meaning: "List which files are staged, unstaged, and untracked."
    },
    {
      command: "git log",
      meaning: "List which files are staged, unstaged, and untracked."
    },
    {
      command: "git diff",
      meaning: "Show unstaged changes between your index andworking directory."
    }
  ],

  Git_Branches: [
    {
      command: "git branch",
      meaning: "List all branches in the repository"
    },
    {
      command: "git branch -a",
      meaning: "List all remote branches"
    },
    {
      command: "git branch [branch]",
      meaning: "Create a new branch under a specified name"
    },
    {
      command: "git checkout [branch]",
      meaning:
        "switch to another branch (either an existing one or by creating a new one under the specified name]"
    },
    {
      command: "git log [branch1]..[branch2]",
      meaning:
        "Compare two branches by showing which commits from the first branch are missing from the second branch"
    },

    {
      command: "git branch -d [branch]",
      meaning: "Delete a local branch"
    },
    {
      command: "git branch -m [new_branch_name]",
      meaning: "Rename a branch you are currently working in"
    },
    {
      command: "git merge [branch]",
      meaning: "Merge the specified branch with the current branch"
    }
  ],
  Git_Undo: [
    {
      command: "git revert <commit>",
      meaning:
        "Create new commit that undoes all of the changes made in <commit>, then apply it to the current branch."
    },
    {
      command: "git reset <file>",
      meaning:
        "Remove <file> from the staging area, but leave the working directory unchanged. This unstages a file without overwriting any changes."
    },
    {
      command: "git clean -n",
      meaning:
        "Shows which files would be removed from working directory.Use the -f flag in place of the -n flag to execute the clean."
    }
  ],
  Git_Reset: [
    {
      command: "git reset",
      meaning:
        "Reset staging area to match most recent commit,but leave the working directory unchanged."
    },
    {
      command: "git reset --hard",
      meaning:
        "Reset staging area and working directory to match most recent  commit and overwrites all changes in the working directory."
    },
    {
      command: "git reset <commit>",
      meaning:
        "Move the current branch tip backward to <commit>, reset the staging area to match, but leave the working directory alone."
    },
    {
      command: "git reset --hard <commit>",
      meaning:
        "Same as previous, but resets both the staging area & working directory to match. Deletes uncommitted changes, and all commits after <commit>"
    }
  ],
  Git_Rebase: [
    {
      command: "git rebase -i <base>",
      meaning:
        "Interactively rebase current branch onto <base>. Launches editor to enter commands for how each commit will be transferred to the new base."
    }
  ],
  Git_Push: [
    {
      command: "git push <remote> --force",
      meaning:
        "Forces the git push even if it results in a non-fast-forward merge. Do not use the --force flag unless you’re absolutely sure you know what you’re doing"
    },
    {
      command: "git push <remote> --all",
      meaning: "Push all of your local branches to the specified remote"
    },
    {
      command: "git push <remote> --tags",
      meaning: "Push all of your local branches to the specified remote"
    }
  ],
  Git_Pull: [
    {
      command: "git pull <remote>",
      meaning:
        "Fetch the specified remote’s copy of current branch and immediately merge it into the local copy"
    },
    {
      command: "git pull --rebase <remote>",
      meaning:
        "Fetch the remote’s copy of current branch and rebases it into the local copy. Uses git rebase instead of merge to integrate the branches"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Git_Basics");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Git Dictionary </h1>
      <p style={{ fontSize: "smaller", color: "white" }}>
        {" "}
        Checkout Some Amazing cheatsheet of Git Commands
      </p>

      <div className="btns">
        {Object.keys(gitdb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "#fff"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div className="cmdtable" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gitdb[selectedGenre].map((book) => (
            <li
              key={book.command}
              style={{
                position: "relative",
                top: "1.5rem",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "60%",
                height: "11rem",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "#000",
                marginLeft: "4rem",
                opacity: "0.8"
              }}
            >
              {" "}
              <div className="cmd" style={{ fontSize: "larger" }}>
                {" "}
                {book.command}{" "}
              </div>
              <div className="descp" style={{ fontSize: "smaller" }}>
                {" "}
                {book.meaning}{" "}
              </div>
            </li>
          ))}
        </ul>

        <div className="fotter">
          <h4>This App is made with ❤️ By Aman Gupta</h4>
        </div>
        <marquee>
          Stay Tuned for Lattest Upadates and more Advanced command !!!
        </marquee>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  Leaf,
  ScanLine,
  Sparkles,
  CircleUserRound,
  SlidersHorizontal,
  Bell,
  ChevronDown,
  ArrowRight,
  Camera,
  Search,
  ShieldCheck,
  History,
  Filter,
  Flame,
  Utensils,
  TrendingUp,
  CalendarDays,
  UserRound,
  Target,
  Ruler,
  Weight,
  Activity,
  Apple,
  Check,
  Pencil,
} from "lucide-react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onLogin({
      username,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <div className="logo-icon">
            <Leaf size={19} />
          </div>

          <span>NutriWise</span>
        </div>

        <div className="login-heading">
          <p className="eyebrow">WELCOME BACK</p>

          <h2>Your wellness journey continues here.</h2>

          <p>
            Sign in to continue to your personalized nutrition space.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>

          <div className="login-field">
            <label htmlFor="username">
              Email
            </label>

            <input
              id="username"
              type="email"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary login-button"
          >
            Sign in
            <ArrowRight size={17} />
          </button>

        </form>

        <div className="login-note">
          <ShieldCheck size={16} />

          <span>
            Your account information is securely protected.
          </span>
        </div>

      </div>
    </div>
  );
}

function OverviewPage({ onAnalyze }) {
  return (
    <main className="page-content overview-page">
      <div className="overview-intro">
        <div>
          <p className="eyebrow">YOUR DAILY OVERVIEW</p>
          <h2>Small choices add up.</h2>
          <p className="intro-text">
            Here's how your nutrition is looking today. No pressure, just
            information to help you feel your best.
          </p>
        </div>

        <button className="btn-primary" onClick={onAnalyze}>
          <ScanLine size={18} />
          Analyze a meal
        </button>
      </div>

      <section className="nutrition-grid">
        <NutritionCard
          title="Calories"
          value="1,248"
          target="2,125"
          unit="kcal"
          percent={59}
          type="calories"
        />

        <NutritionCard
          title="Protein"
          value="68"
          target="112"
          unit="g"
          percent={61}
          type="protein"
        />

        <NutritionCard
          title="Carbs"
          value="142"
          target="240"
          unit="g"
          percent={59}
          type="carbs"
        />

        <NutritionCard
          title="Fats"
          value="41"
          target="71"
          unit="g"
          percent={58}
          type="fats"
        />
      </section>

      <div className="overview-main-grid">
        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">TODAY</p>
              <h3>Today's rhythm</h3>
            </div>

            <button className="text-button">View details</button>
          </div>

          <div className="card rhythm-card">
            <div className="meal-list">
              <div className="meal-row">
                <div className="meal-icon breakfast">
                  <Utensils size={18} />
                </div>

                <div className="meal-info">
                  <strong>Breakfast</strong>
                  <span>Oats, banana & almonds</span>
                </div>

                <span className="meal-calories">420 kcal</span>
                <span className="meal-status complete">Logged</span>
              </div>

              <div className="meal-row">
                <div className="meal-icon lunch">
                  <Utensils size={18} />
                </div>

                <div className="meal-info">
                  <strong>Lunch</strong>
                  <span>Dal, rice & mixed vegetables</span>
                </div>

                <span className="meal-calories">628 kcal</span>
                <span className="meal-status complete">Logged</span>
              </div>

              <div className="meal-row dinner-row">
                <div className="meal-icon dinner">
                  <Utensils size={18} />
                </div>

                <div className="meal-info">
                  <strong>Dinner</strong>
                  <span>What's on your plate?</span>
                </div>

                <button className="meal-action" onClick={onAnalyze}>
                  Analyze <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE GUIDANCE</p>
              <h3>NutriWise Insight</h3>
            </div>
          </div>

          <div className="card insight-card">
            <div className="insight-ring">
              <Sparkles size={24} />
            </div>

            <div className="insight-content">
              <h4>You're building a balanced day</h4>

              <p>
                You've got a good start on protein today. Adding a
                protein-rich dinner could help you comfortably reach your
                target.
              </p>

              <button className="insight-button">
                See protein-rich foods <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="streak-banner">
        <div className="streak-left">
          <div className="streak-icon">
            <Flame size={20} />
          </div>

          <div>
            <strong>You're on a 7-day rhythm</strong>
            <span>Keep showing up for yourself.</span>
          </div>
        </div>

        <div className="streak-days">
          <span className="streak-day done">M</span>
          <span className="streak-day done">T</span>
          <span className="streak-day done">W</span>
          <span className="streak-day done">T</span>
          <span className="streak-day done">F</span>
          <span className="streak-day done">S</span>
          <span className="streak-day today">S</span>
        </div>
      </section>
    </main>
  );
}


function NutritionCard({ title, value, target, unit, percent, type }) {
  return (
    <div className={`nutrition-card ${type}`}>
      <div className="nutrition-card-top">
        <div className="nutrition-title">
          <span className={`nutrition-dot ${type}`}></span>
          {title}
        </div>
      </div>

      <div className="nutrition-value">
        {value}
        <span>{unit}</span>
      </div>

      <div className="nutrition-progress">
        <div
          className={`nutrition-progress-bar ${type}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <div className="nutrition-bottom">
        <span>{percent}% of target</span>
        <span>{target} {unit}</span>
      </div>
    </div>
  );
}


function AnalyzeFoodPage() {
  const [description, setDescription] = useState("");

  return (
    <main className="page-content analyze-page">
      <div className="analyze-intro">
        <p className="eyebrow">FOOD ANALYSIS</p>

        <h2>What are you enjoying?</h2>

        <p className="intro-text">
          Snap a photo or tell us what's on your plate. We'll help you
          understand it without the judgment.
        </p>
      </div>

      <div className="analysis-steps">
        <div className="analysis-step active">
          <span className="step-number">1</span>
          <span>AI detection</span>
        </div>

        <span className="step-line"></span>

        <div className="analysis-step">
          <span className="step-number">2</span>
          <span>Nutrition</span>
        </div>

        <span className="step-line"></span>

        <div className="analysis-step">
          <span className="step-number">3</span>
          <span>Goal fit</span>
        </div>

        <span className="step-line"></span>

        <div className="analysis-step">
          <span className="step-number">4</span>
          <span>Your next step</span>
        </div>
      </div>

      <section className="card analyze-card">
        <div className="photo-upload-side">
          <div className="upload-area">
            <div className="upload-icon">
              <Camera size={25} />
            </div>

            <h3>Drop a meal photo here</h3>

            <p>JPG or PNG · up to 10MB</p>

            <button className="btn-secondary">
              Choose a photo
            </button>
          </div>
        </div>

        <div className="description-side">
          <div className="or-divider">
            <span>OR DESCRIBE IT</span>
          </div>

          <label className="label">
            Tell us what's on your plate
          </label>

          <div className="food-search">
            <Search size={18} />

            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="e.g. Dal, rice and mixed vegetables"
            />
          </div>

          <p className="suggestion-label">TRY A SUGGESTION</p>

          <div className="suggestion-chips">
            <button
              className="suggestion-chip"
              onClick={() => setDescription("Avocado toast")}
            >
              Avocado toast
            </button>

            <button
              className="suggestion-chip"
              onClick={() => setDescription("Greek yogurt bowl")}
            >
              Greek yogurt bowl
            </button>
          </div>

          <button className="btn-primary continue-button">
            Continue
            <ArrowRight size={17} />
          </button>

          <div className="privacy-note">
            <ShieldCheck size={16} />

            <span>
              Your food photos stay private and are only used to help
              analyze your meal.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}


function FoodHistoryPage() {
  return (
    <main className="page-content history-page">
      <div className="history-intro">
        <div>
          <p className="eyebrow">YOUR PATTERNS, NOT YOUR PERFECTION</p>

          <h2>Food history</h2>

          <p className="intro-text">
            Look back at what you've eaten and notice the patterns that
            matter to you.
          </p>
        </div>

        <div className="history-controls">
          <button className="history-control">
            <CalendarDays size={16} />
            This week
            <ChevronDown size={15} />
          </button>

          <button className="history-control">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <section className="history-summary-grid">
        <div className="card history-summary-card">
          <div className="history-summary-icon green">
            <ScanLine size={19} />
          </div>

          <div>
            <span>Meals analyzed</span>
            <strong>18</strong>
            <small>This week</small>
          </div>
        </div>

        <div className="card history-summary-card">
          <div className="history-summary-icon orange">
            <Utensils size={19} />
          </div>

          <div>
            <span>Average daily calories</span>
            <strong>1,986</strong>
            <small>Within your target range</small>
          </div>
        </div>

        <div className="card history-summary-card">
          <div className="history-summary-icon purple">
            <TrendingUp size={19} />
          </div>

          <div>
            <span>Your momentum</span>
            <strong>7 days</strong>
            <small>You've been consistent</small>
          </div>
        </div>
      </section>

      <div className="history-main-grid">
        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">RECENT SCANS</p>
              <h3>What you've enjoyed</h3>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="card recent-scans-card">
            <div className="history-date">
              <span>Today</span>
              <small>Sunday, Sep 6</small>
            </div>

            <HistoryMealRow
              icon="breakfast"
              title="Oats, banana & almonds"
              meal="Breakfast"
              calories="420 kcal"
              time="8:12 AM"
              status="Balanced"
            />

            <HistoryMealRow
              icon="lunch"
              title="Dal, rice & mixed vegetables"
              meal="Lunch"
              calories="628 kcal"
              time="1:24 PM"
              status="Good fit"
            />

            <div className="history-date second-date">
              <span>Yesterday</span>
              <small>Saturday, Sep 5</small>
            </div>

            <HistoryMealRow
              icon="dinner"
              title="Paneer tikka & roti"
              meal="Dinner"
              calories="582 kcal"
              time="8:46 PM"
              status="Balanced"
            />

            <HistoryMealRow
              icon="breakfast"
              title="Greek yogurt bowl"
              meal="Breakfast"
              calories="356 kcal"
              time="9:02 AM"
              status="Good fit"
            />

            <div className="history-date second-date">
              <span>Friday</span>
              <small>September 4</small>
            </div>

            <HistoryMealRow
              icon="lunch"
              title="Vegetable pulao & raita"
              meal="Lunch"
              calories="514 kcal"
              time="1:16 PM"
              status="Balanced"
            />
          </div>
        </section>

        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">THIS WEEK</p>
              <h3>Week at a glance</h3>
            </div>
          </div>

          <div className="card week-chart-card">
            <div className="week-chart">
              <div className="chart-grid-line line-one"></div>
              <div className="chart-grid-line line-two"></div>
              <div className="chart-grid-line line-three"></div>

              <WeekBar day="M" height="58%" />
              <WeekBar day="T" height="72%" />
              <WeekBar day="W" height="64%" />
              <WeekBar day="T" height="84%" />
              <WeekBar day="F" height="70%" />
              <WeekBar day="S" height="90%" />
              <WeekBar day="S" height="61%" active />
            </div>

            <div className="chart-legend">
              <span>
                <i></i>
                Daily calories
              </span>

              <strong>1,986 avg.</strong>
            </div>

            <div className="history-insight">
              <div className="history-insight-icon">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>A steady week</strong>

                <p>
                  Your meals have stayed fairly consistent. That's a
                  useful pattern worth keeping.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


function HistoryMealRow({
  icon,
  title,
  meal,
  calories,
  time,
  status,
}) {
  return (
    <div className="history-meal-row">
      <div className={`history-meal-icon ${icon}`}>
        <Utensils size={17} />
      </div>

      <div className="history-meal-info">
        <strong>{title}</strong>

        <span>
          {meal} · {time}
        </span>
      </div>

      <div className="history-meal-right">
        <strong>{calories}</strong>
        <span>{status}</span>
      </div>
    </div>
  );
}


function WeekBar({ day, height, active = false }) {
  return (
    <div className="week-bar-column">
      <div className="week-bar-area">
        <div
          className={`week-bar ${active ? "active" : ""}`}
          style={{ height }}
        ></div>
      </div>

      <span>{day}</span>
    </div>
  );
}


function ProfileGoalsPage({ profile }) {
  const [goal, setGoal] = useState("Weight Loss");

  return (
    <main className="page-content profile-page">

      <div className="profile-intro">
        <div>
          <p className="eyebrow">YOUR PERSONAL PLAN</p>

          <h2>Profile & goals</h2>

          <p className="intro-text">
            Your plan is built around you. Update your details anytime
            as your needs change.
          </p>
        </div>

        <button className="btn-secondary">
          <Pencil size={16} />
          Edit profile
        </button>
      </div>


      <div className="profile-main-grid">

        <section className="card profile-card">

          <div className="profile-card-header">
            <div className="profile-avatar-large">
              M
            </div>

            <div>
              <p className="eyebrow">YOUR PROFILE</p>
              <h3>{profile?.name || "Your profile"}</h3>
              <span>Wellness journey</span>
            </div>
          </div>

          <div style={{ marginBottom: "20px", padding: "12px", background: "#f0f7f2", borderRadius: "10px" }}>
            <strong>DEBUG PROFILE:</strong>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </div>

          <div className="profile-details">

            <ProfileDetail
              icon={<UserRound size={17} />}
              label="Age"
              value={profile?.age ? `${profile.age} years` : "Not set"}
            />

            <ProfileDetail
              icon={<Ruler size={17} />}
              label="Height"
              value={profile?.height ? `${profile.height} cm` : "Not set"}
            />

            <ProfileDetail
              icon={<Weight size={17} />}
              label="Weight"
              value={profile?.weight ? `${profile.weight} kg` : "Not set"}
            />

            <ProfileDetail
              icon={<Activity size={17} />}
              label="Activity level"
              value={profile?.activity_level || "Not set"}
            />

            <ProfileDetail
              icon={<Apple size={17} />}
              label="Food preference"
              value={profile?.food_preference || "Not set"}
            />

            <ProfileDetail
              icon={<CircleUserRound size={17} />}
              label="Gender"
              value={profile?.gender || "Not set"}
            />

          </div>


          <div className="profile-note">
            <Sparkles size={16} />

            <span>
              Keeping these details up to date helps NutriWise make
              better recommendations for you.
            </span>
          </div>

        </section>


        <section>

          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR GOALS</p>
              <h3>What are you working toward?</h3>
            </div>
          </div>


          <div className="goal-options">

            <button
              className={`goal-option ${
                goal === "Weight Loss" ? "selected" : ""
              }`}
              onClick={() => setGoal("Weight Loss")}
            >
              <div className="goal-option-icon">
                <TrendingUp size={19} />
              </div>

              <div>
                <strong>Weight Loss</strong>
                <span>A gentle calorie deficit</span>
              </div>

              {goal === "Weight Loss" && (
                <div className="goal-check">
                  <Check size={14} />
                </div>
              )}
            </button>


            <button
              className={`goal-option ${
                goal === "Maintain Weight" ? "selected" : ""
              }`}
              onClick={() => setGoal("Maintain Weight")}
            >
              <div className="goal-option-icon">
                <Target size={19} />
              </div>

              <div>
                <strong>Maintain Weight</strong>
                <span>Stay around your current weight</span>
              </div>

              {goal === "Maintain Weight" && (
                <div className="goal-check">
                  <Check size={14} />
                </div>
              )}
            </button>


            <button
              className={`goal-option ${
                goal === "Build Muscle" ? "selected" : ""
              }`}
              onClick={() => setGoal("Build Muscle")}
            >
              <div className="goal-option-icon">
                <Flame size={19} />
              </div>

              <div>
                <strong>Build Muscle</strong>
                <span>Support strength and muscle growth</span>
              </div>

              {goal === "Build Muscle" && (
                <div className="goal-check">
                  <Check size={14} />
                </div>
              )}
            </button>

          </div>


          <div className="card plan-card">

            <div className="plan-card-header">
              <div>
                <p className="eyebrow">YOUR CURRENT PLAN</p>
                <h3>{goal}</h3>
              </div>

              <div className="plan-badge">
                Personalized
              </div>
            </div>


            <div className="plan-stats">

              <div className="plan-stat">
                <span>Daily calories</span>
                <strong>2,125 <small>kcal</small></strong>
              </div>

              <div className="plan-stat">
                <span>Protein target</span>
                <strong>112 <small>g</small></strong>
              </div>

              <div className="plan-stat">
                <span>Approach</span>
                <strong>Gentle</strong>
              </div>

            </div>


            <div className="plan-message">
              <div className="plan-message-icon">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>Progress, not perfection.</strong>

                <p>
                  Your targets are designed to give you direction,
                  not create pressure. Small consistent choices matter
                  more than perfect days.
                </p>
              </div>
            </div>


            <button className="plan-adjust-button">
              Adjust your plan
              <ArrowRight size={16} />
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}


function ProfileDetail({ icon, label, value }) {
  return (
    <div className="profile-detail">

      <div className="profile-detail-icon">
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

    </div>
  );
}


function App() {
  const [currentPage, setCurrentPage] = useState("overview");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );
  const [profile, setProfile] = useState(null);

useEffect(() => {
  if (!isLoggedIn) {
    return;
  }

  const token = localStorage.getItem("access_token");

  console.log("Token exists:", !!token);

  fetch("http://127.0.0.1:8000/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log("Auth response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      return response.json();
    })
    .then((userData) => {
      console.log("Logged-in user:", userData);

      return fetch(
        `http://127.0.0.1:8000/users/${userData.id}/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    })
    .then((response) => {
      console.log("Profile response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      return response.json();
    })
    .then((profileData) => {
      console.log("Profile data received:", profileData);
      setProfile(profileData);
    })
    .catch((error) => {
      console.error("Profile request failed:", error);
    });
}, [isLoggedIn]);

  const handleLogin = async (credentials) => {
  try {
    const formData = new URLSearchParams();

    formData.append("username", credentials.username);
    formData.append("password", credentials.password);

    const response = await fetch(
      "http://127.0.0.1:8000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );

    const data = await response.json();

    console.log("Login response:", data);

    if (!response.ok) {
      console.error("Login failed:", data);
      return;
    }

    localStorage.setItem("access_token", data.access_token);

    console.log("JWT saved successfully.");

    setIsLoggedIn(true);
  } catch (error) {
    console.error("Login request failed:", error);
  }
};

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-shell">

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">
            <Leaf size={19} />
          </div>

          <span>NutriWise</span>
        </div>


        <div className="sidebar-section">

          <p className="sidebar-label">YOUR SPACE</p>

          <nav className="sidebar-nav">

            <button
              className={`nav-item ${
                currentPage === "overview" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("overview")}
            >
              <Sparkles size={18} />
              <span>Overview</span>
            </button>


            <button
              className={`nav-item ${
                currentPage === "analyze" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("analyze")}
            >
              <ScanLine size={18} />
              <span>Analyze food</span>
            </button>


            <button
              className={`nav-item ${
                currentPage === "history" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("history")}
            >
              <History size={18} />
              <span>Food history</span>
            </button>


            <button
              className={`nav-item ${
                currentPage === "profile" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("profile")}
            >
              <CircleUserRound size={18} />
              <span>Profile & goals</span>
            </button>

          </nav>

        </div>


        <div className="sidebar-bottom">

          <div className="wellness-card">
            <Sparkles size={17} />

            <strong>A gentler way to eat</strong>

            <p>
              One good choice at a time is more than enough.
            </p>
          </div>


          <button className="preferences">
            <SlidersHorizontal size={17} />
            <span>Preferences</span>
          </button>

        </div>

      </aside>


      <div className="main-area">

        <header className="top-header">

          <div className="header-left">

            <p className="header-eyebrow">
              {currentPage === "analyze"
                ? "FOOD ANALYSIS"
                : currentPage === "history"
                ? "YOUR PATTERNS, NOT YOUR PERFECTION"
                : currentPage === "profile"
                ? "YOUR PERSONAL PLAN"
                : "YOUR DAILY OVERVIEW"}
            </p>

            <h1>
              {currentPage === "analyze"
                ? "Analyze a food"
                : currentPage === "history"
                ? "Food history"
                : currentPage === "profile"
                ? "Profile & goals"
                : "Good morning, Maya"}
            </h1>

          </div>


          <div className="header-right">

            <button className="notification-button">
              <Bell size={19} />
              <span className="notification-dot"></span>
            </button>


            <button className="user-menu">

              <div className="avatar">
                M
              </div>

              <div className="user-info">
                <strong>Maya</strong>
                <span>Wellness journey</span>
              </div>

              <ChevronDown size={16} />

            </button>

          </div>

        </header>


        {currentPage === "overview" && (
          <OverviewPage
            onAnalyze={() => setCurrentPage("analyze")}
          />
        )}

        {currentPage === "analyze" && (
          <AnalyzeFoodPage />
        )}

        {currentPage === "history" && (
          <FoodHistoryPage />
        )}

        {currentPage === "profile" && (
          <ProfileGoalsPage profile={profile} />
        )}

      </div>

    </div>
  );
}


export default App;